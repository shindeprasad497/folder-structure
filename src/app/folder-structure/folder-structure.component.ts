import { Component } from '@angular/core';
import { NodeItem } from './node-item.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-folder-structure',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './folder-structure.component.html',
  styleUrls: ['./folder-structure.component.scss']
})
export class FolderStructureComponent {
  treeData: NodeItem[] = [];
  idCounter = 1;
  draggedNode: NodeItem | null = null;
  draggedFromParent: NodeItem | null = null;

  addRoot(type: 'folder' | 'file') {
    const node: NodeItem = {
      id: this.idCounter++,
      name: `${type.toUpperCase()} ${this.idCounter}`,
      type,
      children: type === 'folder' ? [] : undefined,
      expanded: true
    };
    this.treeData.push(node);
  }

  addChild(parent: NodeItem, type: 'folder' | 'file') {
    const node: NodeItem = {
      id: this.idCounter++,
      name: `${type.toUpperCase()} ${this.idCounter}`,
      type,
      children: type === 'folder' ? [] : undefined,
      expanded: true
    };
    parent.children = parent.children || [];
    parent.children.push(node);
    parent.expanded = true;
  }

  toggle(node: NodeItem) {
    node.expanded = !node.expanded;
  }

  onDragStart(event: DragEvent, node: NodeItem, parent: NodeItem | null) {
    this.draggedNode = node;
    this.draggedFromParent = parent;
    event.dataTransfer?.setData('text/plain', node.id.toString());
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent, targetNode: NodeItem) {
    event.preventDefault();

    if (!this.draggedNode || this.draggedNode === targetNode) return;
    if (targetNode.type !== 'folder') return;

    // Don't move to same parent
    const isSameParent = this.draggedFromParent?.id === targetNode.id;
    if (isSameParent) return;

    // Prevent circular move
    if (this.isDescendant(this.draggedNode, targetNode)) return;

    // Remove from old parent
    this.removeNode(this.draggedFromParent, this.draggedNode);

    // Add to new parent
    targetNode.children = targetNode.children || [];
    targetNode.children.push(this.draggedNode);
    targetNode.expanded = true;

    this.resetDrag();
  }

  onRootDrop(event: DragEvent) {
    event.preventDefault();

    if (!this.draggedNode) return;

    // Already at root? do nothing
    if (this.draggedFromParent == null) return;

    // Remove from old parent
    this.removeNode(this.draggedFromParent, this.draggedNode);

    // Add to root
    this.treeData.push(this.draggedNode);

    this.resetDrag();
  }

  removeNode(parent: NodeItem | null, node: NodeItem): void {
    const list = parent ? parent.children : this.treeData;
    const index = list?.findIndex(n => n.id === node.id);
    if (index !== undefined && index > -1) list?.splice(index, 1);
  }

  resetDrag() {
    this.draggedNode = null;
    this.draggedFromParent = null;
  }

  isDescendant(source: NodeItem, target: NodeItem): boolean {
    if (!source.children) return false;
    for (const child of source.children) {
      if (child.id === target.id || this.isDescendant(child, target)) return true;
    }
    return false;
  }
}