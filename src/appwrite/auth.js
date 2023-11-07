import Conf from "../conf/Conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(Conf.appWriteUrl)
      .setProject(Conf.appWriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ name, email, password }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name,
        );

      if (userAccount) {
        //call another function
        return await this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      throw error;
    }
    return null;
  }

  async logout() {
    try {
       await this.account.deleteSessions();
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthService();

export default authService;
