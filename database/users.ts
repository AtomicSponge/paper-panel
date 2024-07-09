/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

export interface Users {
  id:number
  name:string
  login:string
  password:string
  salt:string
  admin:boolean
  serveradmin:boolean
}

export const users = {
  user: [
    {
      id: 0,
      name: 'Administrator',
      login: 'admin',
      password: '7d48fc1ebc7df52c32759fd620b64fe48907ebca9b3d396d61b68843a82f8b1813fa1fe27bffa6a6f075c2eebb988b948a16f721945117bd857e6fd8faa20b74',
      salt: 'changeme',
      admin: true,
      serveradmin: true
    },
    {
      id: 1,
      name: 'Matthew',
      login: 'matt',
      password: '7d48fc1ebc7df52c32759fd620b64fe48907ebca9b3d396d61b68843a82f8b1813fa1fe27bffa6a6f075c2eebb988b948a16f721945117bd857e6fd8faa20b74',
      salt: 'changeme',
      admin: false,
      serveradmin: true
    },
    {
      id: 2,
      name: 'Test',
      login: 'test',
      password: '7d48fc1ebc7df52c32759fd620b64fe48907ebca9b3d396d61b68843a82f8b1813fa1fe27bffa6a6f075c2eebb988b948a16f721945117bd857e6fd8faa20b74',
      salt: 'changeme',
      admin: false,
      serveradmin: false
    }
  ],
}
