import { Element, helpers } from '@bento-editor/core';
import attributes, { Attributes } from './attributes';
import editable from './editable';
export * from './renderer';

const element: Element<Attributes> = {
  type: 'toggle-body',
  attributes,
  editable,
  insertBreak: (editor, nodeEntry, config) =>
    helpers.insertBreaks.copyInsertBreak(editor, nodeEntry, config),
};
export default element;
