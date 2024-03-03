export interface IProps {
  events?: Record<string, (evt: EventTarget) => void>
}

export interface IValidationRules {
  validationRules: Record<string, (input: string) => string>,
}

export interface IForm extends IValidationRules {
  onRedirect: (e: Event) => void,
  onSubmit: (e: Event) => void,
}

export interface IModal {
  title: string,
  content: string,
  buttonLabel: string,
  onClick: () => void,
  onSubmit: (e: Event) => void,
}

export interface IModalConfig {
  content: string,
  showModal: boolean,
  onClose: (e: Event) => void,
  onSubmit: (e: Event) => void,
}

export interface IChat {
  name: string,
  avatar?: string,
  unreadMessages?: number,
}

export interface IMessage {
  text: string,
  dateCreated: string,
  timeCreated: string,
  isAuthorMessage?: boolean;
  isRead?: boolean;
}
