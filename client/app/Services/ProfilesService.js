import { ProxyState } from "../AppState.js";
import Profile from "../Models/Profile.js"

class ProfilesService {
  constructor() {
    this.getProfiles()
  }

  async getProfiles() {
    try {
      //const res = await api.get('jobs')
      //ProxyState.profiles = res.data.map(rawProfileData => new Profile(rawProfileData))
      ProxyState.profiles = [new Profile({ id: 1123525345, name: "Lodo", imgUrl: "https://dogtime.com/assets/uploads/2011/03/puppy-development.jpg" })]
    } catch (error) {
      console.error(error);
    }
  }
}


export const profilesService = new ProfilesService();
