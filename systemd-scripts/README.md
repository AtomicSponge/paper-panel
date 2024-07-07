Create user account `minecraft` and place Paper server in `/home/minecraft/paper`

Name Paper server executable file `server.jar`

Place files in `/etc/systemd/system/` then run `systemctl enable minecraft`

Default memory usage is 4GB, to change edit `minecraft.service` and change the following under `ExecStart` to your desired values: `-Xms4096M -Xmx4096M`

Run commands:
```
echo "/stop" > /run/minecraft.stdin
```

<https://docs.papermc.io/misc/tools/start-script-gen>
