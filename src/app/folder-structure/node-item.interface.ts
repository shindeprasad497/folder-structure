export interface NodeItem {
  id: number;
  name: string;
  type: 'folder' | 'file';
  children?: NodeItem[];
  expanded?: boolean;
}