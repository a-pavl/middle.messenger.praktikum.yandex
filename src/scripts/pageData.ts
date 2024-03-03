import { IChatCard } from '../components/chatCard/types';
import defaultAvatarImg from '../assets/default_avatar.svg';
import { IChat, IMessage } from '../types';

export const chatList: Array<IChatCard> = [
  {
    chat: {
      name: 'test 1',
      avatar: defaultAvatarImg,
      unreadMessages: 3,
    },
    lastMessage: {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Vel eros donec ac odio tempor orci.',
      dateCreated: new Date(Date.now()).toLocaleDateString(navigator.language, { year: 'numeric', month: 'short', day: 'numeric' }),
      timeCreated: new Date(Date.now()).toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' }),
    },
  },
  {
    chat: {
      name: 'test 2',
      avatar: defaultAvatarImg,
      unreadMessages: 3,
    },
    lastMessage: {
      text: 'Vel eros donec ac odio tempor orci. Faucibus in ornare quam viverra orci sagittis eu volutpat.',
      dateCreated: new Date(Date.now()).toLocaleDateString(navigator.language, { year: 'numeric', month: 'short', day: 'numeric' }),
      timeCreated: new Date(Date.now()).toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' }),
    },
  },
  {
    chat: {
      name: 'test 3',
      avatar: defaultAvatarImg,
      unreadMessages: 3,
    },
    lastMessage: {
      text: 'Nulla porttitor massa id neque. Enim eu turpis egestas pretium aenean pharetra.',
      dateCreated: new Date(Date.now()).toLocaleDateString(navigator.language, { year: 'numeric', month: 'short', day: 'numeric' }),
      timeCreated: new Date(Date.now()).toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' }),
    },
  },
];

export const chat: IChat = {
  name: 'test 1',
  avatar: defaultAvatarImg,
};

export const msgList: Array<IMessage> = [
  {
    text: 'Volutpat est velit egestas dui id. Id velit ut tortor pretium viverra suspendisse potenti nullam.',
    dateCreated: new Date(Date.now()).toLocaleDateString(navigator.language, { year: 'numeric', month: 'short', day: 'numeric' }),
    timeCreated: new Date(Date.now()).toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' }),
  },
  {
    text: 'Dictum varius duis at consectetur lorem donec massa. Sed id semper risus in hendrerit gravida rutrum quisque. Semper eget duis at tellus at urna. Sapien eget mi proin sed libero enim sed faucibus turpis. Enim ut sem viverra aliquet. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Quam pellentesque nec nam aliquam sem et tortor consequat. Eu sem integer vitae justo eget magna fermentum iaculis. Auctor eu augue ut lectus arcu bibendum at. Libero id faucibus nisl tincidunt eget nullam. Proin nibh nisl condimentum id venenatis a condimentum vitae. Felis imperdiet proin fermentum leo vel. Ut morbi tincidunt augue interdum velit euismod. A lacus vestibulum sed arcu non. Justo nec ultrices dui sapien eget mi proin sed libero. Amet cursus sit amet dictum sit amet. Velit ut tortor pretium viverra. Et magnis dis parturient montes nascetur.',
    dateCreated: new Date(Date.now()).toLocaleDateString(navigator.language, { year: 'numeric', month: 'short', day: 'numeric' }),
    timeCreated: new Date(Date.now()).toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' }),
  },
  {
    text: 'Hello',
    dateCreated: new Date(Date.now()).toLocaleDateString(navigator.language, { year: 'numeric', month: 'short', day: 'numeric' }),
    timeCreated: new Date(Date.now()).toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' }),
  },
  {
    text: 'Hi',
    dateCreated: new Date(Date.now()).toLocaleDateString(navigator.language, { year: 'numeric', month: 'short', day: 'numeric' }),
    timeCreated: new Date(Date.now()).toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' }),
    isAuthorMessage: true,
    isRead: true,
  },
  {
    text: 'How\'s it going?',
    dateCreated: new Date(Date.now()).toLocaleDateString(navigator.language, { year: 'numeric', month: 'short', day: 'numeric' }),
    timeCreated: new Date(Date.now()).toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' }),
    isAuthorMessage: true,
  },
];
