import { ProxyState } from '../AppState.js'
import { profilesService } from '../Services/ProfilesService.js'


function _draw() {
  let profiles = ProxyState.profiles
  let template = ''
  profiles.forEach(j => template += j.Template)
  document.getElementById('profile').innerHTML = template
}

export default class ProfilesController {
  constructor() {
    _draw()
    ProxyState.on("profiles", _draw)
  }
}
