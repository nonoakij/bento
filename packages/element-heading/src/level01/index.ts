import { Element, helpers } from '@bento-editor/core';
import attributes, { Attributes } from './attributes';
import editable from './editable';
import toolbox from './toolbox';
export * from './renderer';

const element: Element<Attributes> = {
  type: 'heading01',
  attributes,
  editable,
  toolbox,
  insertBreak: (editor, nodeEntry) =>
    helpers.insertBreaks.copyInsertBreak(editor, nodeEntry),
};
export default element;
