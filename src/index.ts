import './styles/base.scss';
import Handlebars from 'handlebars';
import * as Components from './components';
import { registerComponent, Router, Store } from './lib';
import { useRouter, useStore } from './middleware';
import { TAppState } from './middleware/store/types';
import { initApp } from './services/app';

declare global {
  interface Window {
    router: Router;
    store: Store<TAppState>;
  }
}

useStore();

Handlebars.registerHelper('add_quotes', (variable) => `"${variable}"`);

Handlebars.registerPartial('AddChatContent', Components.AddChatContent);
Handlebars.registerPartial('AddUserContent', Components.AddUserContent);
Handlebars.registerPartial('DeleteUserContent', Components.DeleteUserContent);
Handlebars.registerPartial('FileInputContent', Components.FileInputContent);

registerComponent('Button', Components.Button);
registerComponent('Input', Components.Input);
registerComponent('InputField', Components.InputField);
registerComponent('Label', Components.Label);
registerComponent('Error', Components.Error);

registerComponent('Modal', Components.Modal);
registerComponent('ContextMenuItem', Components.ContextMenuItem);
registerComponent('ContextMenu', Components.ContextMenu);

registerComponent('ChatCard', Components.ChatCard);
registerComponent('ChatCardList', Components.ChatCardList);
registerComponent('ChatSearch', Components.ChatSearch);

registerComponent('Message', Components.Message);
registerComponent('MessageList', Components.MessageList);
registerComponent('MessageInput', Components.MessageInput);

registerComponent('ChatWindow', Components.ChatWindow);
registerComponent('MessengerSideBar', Components.MessengerSideBar);

useRouter();

initApp();
