import { Language } from 'entity/Language';

export class ConfigAPI {
  private configRequest = import('./fake-server.json');

  async getLanguages(): Promise<Language[]> {
    return (await this.configRequest).config.languages;
  }
}
