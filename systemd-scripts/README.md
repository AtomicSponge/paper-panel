Create user account `minecraft` and place Paper server in `/home/minecraft/paper`

Name Paper server executable file `server.jar`

Place files in `/etc/systemd/system/` then run `systemctl enable minecraft`

Run commands:
```
echo "/stop" > /run/minecraft.stdin
```

<https://docs.papermc.io/misc/tools/start-script-gen>
