interface EnvironmentConfig {
  host: string;
}

const baseApi: { [key: string]: EnvironmentConfig } = {
  // 开发版
  development: {
     host: "https://lianpujt.com:9191",
	 //host: "http://192.168.2.184:8080",
  },
  // 体验版
  trial: {
     host: "https://lianpujt.com:9191",
	 //host: "http://192.168.2.184:8080",
  },
  // 正式版
  release: {
     host: "https://lianpujt.com:9191",
	 //host: "http://192.168.2.184:8080",
  },
  // uniapp 正式环境
  production: {
    host: "https://lianpujt.com:9191",
	//host: "http://192.168.2.184:8080",
	
  },
};
// 环境
export const env = process.env.NODE_ENV;
// host
export const baseUrl = baseApi[env].host;
