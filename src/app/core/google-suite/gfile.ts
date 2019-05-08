export interface GFile {
  id: string;
  version: number;
  name: string;
  data: any;
  mimeType: string;
  description: string;
  properties: { [key: string]: string };
  appProperties: { [key: string]: string };
}

// {
//   "kind": "drive#file",
//   "starred": boolean,
//   "trashed": boolean,
//   "explicitlyTrashed": boolean,
//   "trashingUser": {
//     "kind": "drive#user",
//     "displayName": string,
//     "photoLink": string,
//     "me": boolean,
//     "permissionId": string,
//     "emailAddress": string
//   },
//   "trashedTime": datetime,
//   "parents": [
//     string
//   ],
//   "spaces": [
//     string
//   ],

//   "webContentLink": string,
//   "webViewLink": string,
//   "iconLink": string,
//   "hasThumbnail": boolean,
//   "thumbnailLink": string,
//   "thumbnailVersion": long,
//   "viewedByMe": boolean,
//   "viewedByMeTime": datetime,
//   "createdTime": datetime,
//   "modifiedTime": datetime,
//   "modifiedByMeTime": datetime,
//   "modifiedByMe": boolean,
//   "sharedWithMeTime": datetime,
//   "sharingUser": {
//     "kind": "drive#user",
//     "displayName": string,
//     "photoLink": string,
//     "me": boolean,
//     "permissionId": string,
//     "emailAddress": string
//   },
//   "owners": [
//     {
//       "kind": "drive#user",
//       "displayName": string,
//       "photoLink": string,
//       "me": boolean,
//       "permissionId": string,
//       "emailAddress": string
//     }
//   ],
//   "teamDriveId": string,
//   "driveId": string,
//   "lastModifyingUser": {
//     "kind": "drive#user",
//     "displayName": string,
//     "photoLink": string,
//     "me": boolean,
//     "permissionId": string,
//     "emailAddress": string
//   },
//   "shared": boolean,
//   "ownedByMe": boolean,
//   "capabilities": {
//     "canAddChildren": boolean,
//     "canChangeCopyRequiresWriterPermission": boolean,
//     "canChangeViewersCanCopyContent": boolean,
//     "canComment": boolean,
//     "canCopy": boolean,
//     "canDelete": boolean,
//     "canDeleteChildren": boolean,
//     "canDownload": boolean,
//     "canEdit": boolean,
//     "canListChildren": boolean,
//     "canMoveChildrenOutOfTeamDrive": boolean,
//     "canMoveChildrenOutOfDrive": boolean,
//     "canMoveChildrenWithinTeamDrive": boolean,
//     "canMoveChildrenWithinDrive": boolean,
//     "canMoveItemIntoTeamDrive": boolean,
//     "canMoveItemOutOfTeamDrive": boolean,
//     "canMoveItemOutOfDrive": boolean,
//     "canMoveItemWithinTeamDrive": boolean,
//     "canMoveItemWithinDrive": boolean,
//     "canMoveTeamDriveItem": boolean,
//     "canReadRevisions": boolean,
//     "canReadTeamDrive": boolean,
//     "canReadDrive": boolean,
//     "canRemoveChildren": boolean,
//     "canRename": boolean,
//     "canShare": boolean,
//     "canTrash": boolean,
//     "canTrashChildren": boolean,
//     "canUntrash": boolean
//   },
//   "viewersCanCopyContent": boolean,
//   "copyRequiresWriterPermission": boolean,
//   "writersCanShare": boolean,
//   "permissions": [
//     permissions Resource
//   ],
//   "permissionIds": [
//     string
//   ],
//   "hasAugmentedPermissions": boolean,
//   "folderColorRgb": string,
//   "originalFilename": string,
//   "fullFileExtension": string,
//   "fileExtension": string,
//   "md5Checksum": string,
//   "size": long,
//   "quotaBytesUsed": long,
//   "headRevisionId": string,
//   "contentHints": {
//     "thumbnail": {
//       "image": bytes,
//       "mimeType": string
//     },
//     "indexableText": string
//   },
//   "imageMediaMetadata": {
//     "width": integer,
//     "height": integer,
//     "rotation": integer,
//     "location": {
//       "latitude": double,
//       "longitude": double,
//       "altitude": double
//     },
//     "time": string,
//     "cameraMake": string,
//     "cameraModel": string,
//     "exposureTime": float,
//     "aperture": float,
//     "flashUsed": boolean,
//     "focalLength": float,
//     "isoSpeed": integer,
//     "meteringMode": string,
//     "sensor": string,
//     "exposureMode": string,
//     "colorSpace": string,
//     "whiteBalance": string,
//     "exposureBias": float,
//     "maxApertureValue": float,
//     "subjectDistance": integer,
//     "lens": string
//   },
//   "videoMediaMetadata": {
//     "width": integer,
//     "height": integer,
//     "durationMillis": long
//   },
//   "isAppAuthorized": boolean,
//   "exportLinks": {
//     (key): string
//   }
// }
