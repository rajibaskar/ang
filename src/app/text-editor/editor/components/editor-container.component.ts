import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { select, Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { ROUTE_ANIMATIONS_ELEMENTS, NotificationService } from '@app/core';

import {
  ActionTextModelAdd,
  ActionTextModelFilter,
  ActionTextModelRemoveDone,
  ActionTextModelToggle
} from '../editor.actions';
import {
  selectTextModel,
  selectRemoveDoneTextModelDisabled
} from '../editor.selectors';
import { TextModel, TextModelFilter } from '../editor.model';
import { State } from '../../text-editor.state';

@Component({
  selector: 'zi7-todos',
  templateUrl: './editor-container.component.html',
  styleUrls: ['./editor-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosContainerComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  todos$: Observable<TextModel[]>;
  removeDoneDisabled$: Observable<boolean>;
  newTodo = '';

  constructor(
    public store: Store<State>,
    public snackBar: MatSnackBar,
    public translateService: TranslateService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.todos$ = this.store.pipe(select(selectTextModel));
    this.removeDoneDisabled$ = this.store.pipe(
      select(selectRemoveDoneTextModelDisabled)
    );
  }

  get isAddTodoDisabled() {
    return this.newTodo.length < 4;
  }

  onNewTodoChange(newTodo: string) {
    this.newTodo = newTodo;
  }

  onNewTodoClear() {
    this.newTodo = '';
  }

  onAddTodo() {
    this.store.dispatch(new ActionTextModelAdd({ name: this.newTodo }));
    const addedMessage = this.translateService.instant(
      'zi7.examples.todos.added.notification',
      { name: this.newTodo }
    );
    this.notificationService.info(addedMessage);
    this.newTodo = '';
  }

  onToggleTodo(textModel: TextModel) {
    this.store.dispatch(new ActionTextModelToggle({ id: textModel.id }));
    const newStatus = this.translateService.instant(
      `zi7.examples.todos.filter.${textModel.done ? 'active' : 'done'}`
    );
    const undo = this.translateService.instant('zi7.examples.todos.undo');
    const toggledMessage = this.translateService.instant(
      'zi7.examples.todos.toggle.notification',
      { name: textModel.name }
    );

    this.snackBar
      .open(`${toggledMessage} ${newStatus}`, undo, {
        duration: 2500,
        panelClass: 'todos-notification-overlay'
      })
      .onAction()
      .pipe(take(1))
      .subscribe(() =>
        this.onToggleTodo({ ...textModel, done: !textModel.done })
      );
  }

  onRemoveDoneTodos() {
    this.store.dispatch(new ActionTextModelRemoveDone());
    const removedMessage = this.translateService.instant(
      'zi7.examples.todos.remove.notification'
    );
    this.notificationService.info(removedMessage);
  }

  onFilterTodos(filter: TextModelFilter) {
    this.store.dispatch(new ActionTextModelFilter({ filter }));
    const filterToMessage = this.translateService.instant(
      'zi7.examples.todos.filter.notification'
    );
    const filterMessage = this.translateService.instant(
      `zi7.examples.todos.filter.${filter.toLowerCase()}`
    );
    this.notificationService.info(`${filterToMessage} ${filterMessage}`);
  }
}
