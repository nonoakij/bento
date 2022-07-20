import type { API, BlockAPI, BlockTool, BlockToolData, BlockToolConstructorOptions, ToolConfig, ToolboxConfig } from '@editorjs/editorjs';

export type Data = {
  value: string;
};
export type Config = {
  bar: boolean;
};
type Container = HTMLDivElement;

type AAA = BlockToolConstructorOptions<Data, Config>;
const aaa: AAA = {
  api: {} as API,
  data: {} as Data,
  readOnly: true,
  config: {} as Config,
}
console.log(aaa);

export default class Paragraph implements BlockTool {
  static get toolbox(): ToolboxConfig {
    return {
      // TODO: i18n
      title: 'Paragraph',
      // TODO: replace
      icon: '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z"/></svg>'
    };
  }

  private api: API;
  private data: BlockToolData<Data>;
  private config?: ToolConfig<Config>;
  private blockApi?: BlockAPI;
  private readOnly: boolean;
  private container: Container;

  constructor({ api, data, config, block, readOnly }: BlockToolConstructorOptions<Data, Config>) {
    this.api = api;
    this.data = data;
    this.config = config;
    this.blockApi = block;
    this.readOnly = readOnly;
    this.container = document.createElement('div');
  }

  save(container: Container): BlockToolData<Data> {
    return {
      value: container.innerHTML
    }
  }

  render(): Container {
    console.log('called: render');
    this.container.innerHTML = 'aaaaaaa';
    return this.container;
  }

}
