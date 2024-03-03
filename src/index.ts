import './styles/base.scss';
import Handlebars from 'handlebars';
import * as Components from './components';
import { registerComponent, navigation } from './lib';

Handlebars.registerHelper('add_quotes', (variable) => `"${variable}"`);

Handlebars.registerPartial('AddUserContent', Components.AddUserContent);
Handlebars.registerPartial('DeleteUserContent', Components.DeleteUserContent);

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

document.addEventListener('DOMContentLoaded', () => {
  navigation('messenger');
});
