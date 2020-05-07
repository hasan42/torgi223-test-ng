export interface Comment {
  id?: string
  parentId: string
  dateTime: Date
  authorName: string
  body: string
}
export interface RespComment {
  name: string
}