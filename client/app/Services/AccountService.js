import { ProxyState } from '../AppState.js'
import Account from '../Models/Account.js'
import { api } from './AxiosService.js'

class AccountService {
  constructor() {

  }
  async getAccount() {
    try {
      const res = await api.get('/account')
      ProxyState.account = new Account(res.data)
      console.log(ProxyState.account)
    } catch (err) {
      console.error(err)
    }
  }
}

export const accountService = new AccountService()
