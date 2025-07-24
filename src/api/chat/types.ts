export type TGetChatInput = {
  offset?: number
  limit?: number
  title?: string
}

export type TCreateChatResponse = {
  id: number
}

export type TGetTokenResponse = {
  token: string
}


export type TAddDeleteUserInput = {
  users: number[]
  chatId: number
}
