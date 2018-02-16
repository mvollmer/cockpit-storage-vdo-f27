Cockpit "storage" component with fixes for VDO on Fedora 27

Put this into `~/.local/share/cockpit/`, maye like so:

```
$ mkdir -p ~/.local/share/cockpit
$ cd ~/.local/share/cockpit/
$ git clone https://github.com/mvollmer/cockpit-storage-vdo-f27
```

You can check that Cockpit picks it up:

```
$ cockpit-bridge --packages | grep ^storage
storage: /root/.local/share/cockpit/cockpit-storage-vdo-f27
```

Then log out of Cockpit and log in again.
