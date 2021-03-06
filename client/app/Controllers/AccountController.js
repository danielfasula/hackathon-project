import { ProxyState } from '../AppState.js'
import { accountService } from '../Services/AccountService.js'


function _draw() {
  let account = ProxyState.account
  if (!account) {
    return
  }
  document.getElementById('account').innerHTML = account.Template
}

export default class AccountController {
  constructor() {
    ProxyState.on("account", _draw)
    ProxyState.on("myPosts", _draw)
    ProxyState.on("comments", _draw)
  }
}
