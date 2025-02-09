import axios from "axios";

const simplybookClient = axios.create({
  baseURL: "https://user-api.simplybook.me",
  timeout: 3000,
  headers: {
    "content-Type": "application/json",
  },
});

export class simplybook {
  static #apikey =
    "62ea24a85ff4af9f76a3cc1debd8656d28037007e9aac170613e15f1500ad860";
  static #company = "padelpuls";
  static #secretKey = '414a816671fd6cce75f72de0bfeac32a56642f8e82352c49ed845326045affa2'
  static token = null;
  static headers() {
    return {
      "X-Company-Login": this.#company,
      "X-Token": this.token,
    };
  }

  static async login() {
    const payload = {
      jsonrpc: "2.0",
      method: "getToken",
      params: [this.#company, this.#apikey],
      id: 1,
    };
    const { data, status } = await simplybookClient.post("/login", payload);
    if (status === 200) this.token = data.result;
  }

  static async getEventList() {
    console.log("🚀 ~ simplybook ~ getEventList ~ getEventList:");
    if (!this.token) await this.login();
    const payload = {
      jsonrpc: "2.0",
      method: "getEventList",
      params: [],
      id: 1,
    };
    const { data, status } = await simplybookClient.post("/", payload, {
      headers: this.headers(),
    });
    return status === 200 ? data?.result : [];
  }

  static async getPerformers() {
    if (!this.token) await this.login();
    const payload = {
      jsonrpc: "2.0",
      method: "getUnitList",
      params: [],
      id: 2,
    };
    const { data, status } = await simplybookClient.post("/", payload, {
      headers: this.headers(),
    });
    return status === 200 ? data?.result : [];
  }

  static async getFirstWorkingDay(performerId) {
    if (!this.token) await this.login();
    const payload = {
      jsonrpc: "2.0",
      method: "getFirstWorkingDay",
      params: [performerId],
      id: 3,
    };
    const { data, status } = await simplybookClient.post("/", payload, {
      headers: this.headers(),
    });
    return status === 200 ? data?.result : [];
  }

  static async getWorkCalendar(year, month, performerId) {
    if (!this.token) await this.login();
    const payload = {
      jsonrpc: "2.0",
      method: "getWorkCalendar",
      params: [year, month, performerId],
      id: 4,
    };
    const { data, status } = await simplybookClient.post("/", payload, {
      headers: this.headers(),
    });
    return status === 200 ? data?.result : [];
  }

  static async getStartTimeMatrix(from, to, eventId, performerId, count) {
    if (!this.token) await this.login();
    const payload = {
      jsonrpc: "2.0",
      method: "getStartTimeMatrix",
      params: [from, to, eventId, performerId, count],
      id: 5,
    };
    const { data, status } = await simplybookClient.post("/", payload, {
      headers: this.headers(),
    });
    return status === 200 ? data?.result : [];
  }
  static async calculateEndTime(startDateTime, eventId, count, performerId) {
    if (!this.token) await this.login();
    const payload = {
      jsonrpc: "2.0",
      method: "calculateEndTime",
      params: [startDateTime, eventId, performerId, count],
      id: 5,
    };
    const { data, status } = await simplybookClient.post("/", payload, {
      headers: this.headers(),
    });
    return status === 200 ? data?.result : [];
  }

  static async book(eventId, performerId, date, time, clientData, additional, count, batchId, recurringData) {
    if (!this.token) await this.login();

    const payload = {
    //   jsonrpc: "2.0",
      method: "book",
      params: [eventId, performerId, date, time, clientData, additional, count],
    //   id: 5,
    };

    try {
        console.log("🚀 ~ simplybook ~ book ~ payload:", payload)
        const { data, status } = await axios.post("https://simplybook.me/api/", payload, {
          headers: this.headers(),
        });
        
        console.log("🚀 ~ simplybook ~ book ~ data:", data)
        return status === 200 ? data?.result : [];
    } catch (error) {
        console.log("🚀 ~ simplybook ~ book ~ error:", error)
        
    }
  
  }
}