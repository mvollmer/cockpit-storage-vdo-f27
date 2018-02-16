(function (root, data) {
    var loaded, module;

    /* Load into AMD if desired */
    if (typeof define === 'function' && define.amd) {
        define(data);
        loaded = true;
    }

    /* Load into Cockpit locale */
    if (typeof cockpit === 'object') {
        cockpit.locale(data)
        loaded = true;
    }

    function transformAngular(data, prev) {
        var key, context, parts, value, result = { };
        for (key in data) {
            if (key === "")
                continue;
            parts = key.split("\u0004");
            value = data[key];
            if (parts[1]) {
                context = parts[0];
                key = parts[1];
            } else {
                context = "$$noContext";
                key = parts[0];
            }
            if (value[0] === null)
                value = value[1];
            else
                value = value.slice(1);
            if (!(key in result))
                result[key] = { };
            result[key][context] = value;
        }
        return angular.extend(prev, result);
    }

    /* Load into angular here */
    if (typeof angular === 'object') {
        try {
            module = angular.module(["gettext"]);
        } catch(ex) { console.log(ex); /* Either no angular or angular-gettext */ };
        if (module) {
            loaded = true;
            module.run(['gettextCatalog', function(gettextCatalog) {
                var lang = data[""]["language"];
                var prev = (gettextCatalog.getCurrentLanguage() == lang) ? gettextCatalog.strings : { };
                gettextCatalog.setStrings(lang, transformAngular(data, prev));
                gettextCatalog.setCurrentLanguage(lang);
            }]);
        }
    }

    if (!loaded)
        root.po = data;

/* The syntax of this line is important  by po2json */
}(this, {
 "": {'plural-forms':function(n) {
var nplurals, plural;
nplurals=3; plural=(n==1) ? 0 : (n>=2 && n<=4) ? 1 : 2;
return plural;
},
  "language": "cs",
  "x-generator": "Zanata 3.9.6"
 },
 "$0 Block Device": [
  null,
  "Blokové zařízení"
 ],
 "$0 Chunk Size": [
  null,
  "$0 Velikost bloku dat"
 ],
 "$0 Disks": [
  null,
  "$0 Disky"
 ],
 "$0 data + $1 overhead used of $2 ($3)": [
  null,
  ""
 ],
 "$0 day": [
  "$0 days",
  "$0 den",
  "$0 dny",
  "$0 dnů"
 ],
 "$0 disk is missing": [
  "$0 disks are missing",
  "$0 disk chybí",
  "$0 disky chybí",
  "$0 disků chybí"
 ],
 "$0 filesystems can not be made larger.": [
  null,
  ""
 ],
 "$0 filesystems can not be made smaller.": [
  null,
  ""
 ],
 "$0 hour": [
  "$0 hours",
  "$0 hodina",
  "$0 hodiny",
  "$0 hodin"
 ],
 "$0 is in active use": [
  null,
  "$0 je právě používán"
 ],
 "$0 minute": [
  "$0 minutes",
  "$0 minuta",
  "$0 minuty",
  "$0 minut"
 ],
 "$0 month": [
  "$0 months",
  "$0 měsíc",
  "$0 měsíce",
  "$0 měsíců"
 ],
 "$0 of $1": [
  null,
  "$0 z $1"
 ],
 "$0 used of $1 ($2 saved)": [
  null,
  ""
 ],
 "$0 week": [
  "$0 weeks",
  "$0 týden",
  "$0 týdny",
  "$0 týdnů"
 ],
 "$0 year": [
  "$0 years",
  "$0 rok",
  "$0 roky",
  "$0 roků"
 ],
 "$0, $1 free": [
  null,
  "$0, $1 volné"
 ],
 "$name (from $host)": [
  null,
  "$name (z $host)"
 ],
 "${size} ${desc}": [
  null,
  "${size} ${desc}"
 ],
 "(default)": [
  null,
  "(výchozí)"
 ],
 "(none)": [
  null,
  "(žádné)"
 ],
 "1 MiB": [
  null,
  "1 MiB"
 ],
 "1 day": [
  null,
  "1 den"
 ],
 "1 hour": [
  null,
  "1 hodina"
 ],
 "1 week": [
  null,
  "1 týden"
 ],
 "128 KiB": [
  null,
  "128 KiB"
 ],
 "16 KiB": [
  null,
  "16 KiB"
 ],
 "2 MiB": [
  null,
  "2 MiB"
 ],
 "32 KiB": [
  null,
  "32 KiB"
 ],
 "4 KiB": [
  null,
  "4 KiB"
 ],
 "5 minutes": [
  null,
  "5 minut"
 ],
 "512 KiB": [
  null,
  "512 KiB"
 ],
 "6 hours": [
  null,
  "6 hodin"
 ],
 "64 KiB": [
  null,
  "64 KiB"
 ],
 "8 KiB": [
  null,
  "8 KiB"
 ],
 "A disk is needed.": [
  null,
  ""
 ],
 "A spare disk needs to be added first before this disk can be removed.": [
  null,
  "Je třeba přidat náhradní disk než bude možné tento disk smazat."
 ],
 "Activate": [
  null,
  "Aktivovat"
 ],
 "Activating $target": [
  null,
  "Aktivuji $target"
 ],
 "Add": [
  null,
  "Přidat"
 ],
 "Add Disks": [
  null,
  "Přidat disky"
 ],
 "Add iSCSI Portal": [
  null,
  "Přidat portál iSCSI"
 ],
 "Adding physical volume to $target": [
  null,
  "Přidávám fyzický svazek do $target"
 ],
 "Address": [
  null,
  "Adresa"
 ],
 "Apply": [
  null,
  "Použít"
 ],
 "At least $0 disks are needed.": [
  null,
  "Je vyžadováno alespoň $0 disků."
 ],
 "At least one disk is needed.": [
  null,
  "Je vyžadován alespoň 1 disk."
 ],
 "Authentication required": [
  null,
  "Nutné ověření"
 ],
 "Available targets on $0": [
  null,
  "Dostupné cíle na $0"
 ],
 "Backing Device": [
  null,
  ""
 ],
 "Block": [
  null,
  "Blok"
 ],
 "Block device for filesystems": [
  null,
  "Blokové zařízení pro souborové systémy"
 ],
 "Blocked": [
  null,
  "Blokované"
 ],
 "Can't delete while unlocked": [
  null,
  "Nelze smazat neuzamčený"
 ],
 "Cancel": [
  null,
  "Zrušit"
 ],
 "Change": [
  null,
  "Změna"
 ],
 "Change iSCSI Initiator Name": [
  null,
  "Změnit název iSCSI iniciátoru"
 ],
 "Checking $target": [
  null,
  ""
 ],
 "Checking RAID Device $target": [
  null,
  "Ověřuji zařízení RAID $target"
 ],
 "Checking and Repairing RAID Device $target": [
  null,
  "Ověřuji o opravuji zařízení RAID $target"
 ],
 "Chunk Size": [
  null,
  "Velikost bloku"
 ],
 "Cleaning up for $target": [
  null,
  ""
 ],
 "Close": [
  null,
  "Zavřít"
 ],
 "Compatible with all systems and devices (MBR)": [
  null,
  ""
 ],
 "Compatible with modern system and hard disks > 2TB (GPT)": [
  null,
  ""
 ],
 "Compression": [
  null,
  ""
 ],
 "Confirm passphrase": [
  null,
  ""
 ],
 "Content": [
  null,
  "Obsah"
 ],
 "Create": [
  null,
  ""
 ],
 "Create Logical Volume": [
  null,
  ""
 ],
 "Create Partition": [
  null,
  "Vytvořit oddíl"
 ],
 "Create RAID Device": [
  null,
  ""
 ],
 "Create Snapshot": [
  null,
  ""
 ],
 "Create Thin Volume": [
  null,
  ""
 ],
 "Create VDO Device": [
  null,
  ""
 ],
 "Create Volume Group": [
  null,
  ""
 ],
 "Create new Logical Volume": [
  null,
  ""
 ],
 "Create partition": [
  null,
  ""
 ],
 "Create partition on $0": [
  null,
  ""
 ],
 "Create partition table": [
  null,
  ""
 ],
 "Creating RAID Device $target": [
  null,
  ""
 ],
 "Creating filesystem on $target": [
  null,
  ""
 ],
 "Creating logical volume $target": [
  null,
  ""
 ],
 "Creating partition $target": [
  null,
  ""
 ],
 "Creating snapshot of $target": [
  null,
  ""
 ],
 "Creating volume group $target": [
  null,
  ""
 ],
 "Custom": [
  null,
  "Vlastní"
 ],
 "Custom (Enter filesystem type)": [
  null,
  ""
 ],
 "Custom encryption options": [
  null,
  ""
 ],
 "Custom mount option": [
  null,
  ""
 ],
 "Custom mount options": [
  null,
  ""
 ],
 "DISK IS FAILING": [
  null,
  ""
 ],
 "Data Used": [
  null,
  ""
 ],
 "Deactivate": [
  null,
  ""
 ],
 "Deactivating $target": [
  null,
  ""
 ],
 "Deduplication": [
  null,
  ""
 ],
 "Default": [
  null,
  "Výchozí"
 ],
 "Delete": [
  null,
  "Smazat"
 ],
 "Deleting $target": [
  null,
  ""
 ],
 "Deleting a RAID device will erase all data on it.": [
  null,
  ""
 ],
 "Deleting a VDO device will erase all data on it.": [
  null,
  ""
 ],
 "Deleting a logical volume will delete all data in it.": [
  null,
  ""
 ],
 "Deleting a partition will delete all data in it.": [
  null,
  ""
 ],
 "Deleting a volume group will erase all data on it.": [
  null,
  ""
 ],
 "Deleting volume group $target": [
  null,
  ""
 ],
 "Device File": [
  null,
  ""
 ],
 "Device is read-only": [
  null,
  ""
 ],
 "Disk": [
  null,
  "Disk"
 ],
 "Disk is OK": [
  null,
  ""
 ],
 "Disks": [
  null,
  "Disky"
 ],
 "Don't overwrite existing data": [
  null,
  ""
 ],
 "Drive": [
  null,
  "Mechanika"
 ],
 "Drives": [
  null,
  ""
 ],
 "Edit": [
  null,
  "Upravit"
 ],
 "Ejecting $target": [
  null,
  ""
 ],
 "Emptying $target": [
  null,
  ""
 ],
 "Encrypted $0": [
  null,
  ""
 ],
 "Encrypted EXT4 (LUKS)": [
  null,
  ""
 ],
 "Encrypted Logical Volume of $0": [
  null,
  ""
 ],
 "Encrypted Partition of $0": [
  null,
  ""
 ],
 "Encrypted XFS (LUKS)": [
  null,
  ""
 ],
 "Encrypted volumes can not be resized here.": [
  null,
  ""
 ],
 "Encrypted volumes need to be unlocked before they can be resized.": [
  null,
  ""
 ],
 "Encryption": [
  null,
  "Šifrování"
 ],
 "Encryption Options": [
  null,
  ""
 ],
 "Erase": [
  null,
  "Smazat"
 ],
 "Erasing $target": [
  null,
  ""
 ],
 "Error": [
  null,
  "Chyba"
 ],
 "Extended Partition": [
  null,
  ""
 ],
 "FAILED": [
  null,
  "SELHALO"
 ],
 "Filesystem": [
  null,
  "Systém souborů"
 ],
 "Filesystem Mounting": [
  null,
  ""
 ],
 "Filesystem Name": [
  null,
  ""
 ],
 "Filesystem type": [
  null,
  ""
 ],
 "Filesystems": [
  null,
  "Souborové systémy"
 ],
 "Format": [
  null,
  "Formát"
 ],
 "Format $0": [
  null,
  ""
 ],
 "Format Disk $0": [
  null,
  ""
 ],
 "Formatting a disk will erase all data on it.": [
  null,
  ""
 ],
 "Formatting a storage device will erase all data on it.": [
  null,
  ""
 ],
 "Free": [
  null,
  "Volno"
 ],
 "Free Space": [
  null,
  "Volné místo"
 ],
 "Go to now": [
  null,
  ""
 ],
 "Grow": [
  null,
  ""
 ],
 "Grow Logical Volume": [
  null,
  ""
 ],
 "Grow logical size of $0": [
  null,
  ""
 ],
 "Grow to take all space": [
  null,
  ""
 ],
 "In Sync": [
  null,
  ""
 ],
 "Inactive volume": [
  null,
  ""
 ],
 "Index Memory": [
  null,
  ""
 ],
 "Invalid username or password": [
  null,
  ""
 ],
 "Jobs": [
  null,
  ""
 ],
 "Local Mount Point": [
  null,
  ""
 ],
 "Lock": [
  null,
  "Uzamknout"
 ],
 "Locking $target": [
  null,
  ""
 ],
 "Logical": [
  null,
  ""
 ],
 "Logical Size": [
  null,
  ""
 ],
 "Logical Volume": [
  null,
  ""
 ],
 "Logical Volume (Snapshot)": [
  null,
  ""
 ],
 "Logical Volume of $0": [
  null,
  ""
 ],
 "Marking $target as faulty": [
  null,
  ""
 ],
 "Member of RAID Device": [
  null,
  ""
 ],
 "Member of RAID Device $0": [
  null,
  ""
 ],
 "Metadata Used": [
  null,
  ""
 ],
 "Modifying $target": [
  null,
  ""
 ],
 "Mount": [
  null,
  ""
 ],
 "Mount Options": [
  null,
  ""
 ],
 "Mount Point": [
  null,
  "Připojit do"
 ],
 "Mount at boot": [
  null,
  ""
 ],
 "Mount options": [
  null,
  ""
 ],
 "Mount point can not be empty": [
  null,
  ""
 ],
 "Mount point cannot be empty.": [
  null,
  ""
 ],
 "Mount point must start with \"/\".": [
  null,
  ""
 ],
 "Mount read only": [
  null,
  ""
 ],
 "Mounted At": [
  null,
  ""
 ],
 "Mounting": [
  null,
  ""
 ],
 "Mounting $target": [
  null,
  ""
 ],
 "NFS Mount": [
  null,
  ""
 ],
 "NFS Mounts": [
  null,
  ""
 ],
 "NTFS - Compatible with most systems": [
  null,
  ""
 ],
 "Name": [
  null,
  ""
 ],
 "Name can not be empty.": [
  null,
  ""
 ],
 "Name cannot be empty.": [
  null,
  ""
 ],
 "Name cannot be longer than 127 characters.": [
  null,
  ""
 ],
 "Name cannot contain the character '$0'.": [
  null,
  ""
 ],
 "Name cannot contain whitespace.": [
  null,
  ""
 ],
 "New NFS Mount": [
  null,
  ""
 ],
 "Next": [
  null,
  "Další"
 ],
 "No Filesystem": [
  null,
  ""
 ],
 "No Logical Volumes": [
  null,
  ""
 ],
 "No NFS mounts set up": [
  null,
  ""
 ],
 "No disks are available.": [
  null,
  ""
 ],
 "No drives attached": [
  null,
  ""
 ],
 "No free space": [
  null,
  "Žádné volné místo"
 ],
 "No iSCSI targets set up": [
  null,
  ""
 ],
 "No media inserted": [
  null,
  ""
 ],
 "No partitioning": [
  null,
  ""
 ],
 "No storage set up as RAID": [
  null,
  ""
 ],
 "No storage set up as VDO": [
  null,
  ""
 ],
 "No volume groups created": [
  null,
  ""
 ],
 "Not found": [
  null,
  "Nenalezeno"
 ],
 "Not mounted": [
  null,
  ""
 ],
 "Not running": [
  null,
  ""
 ],
 "Off": [
  null,
  ""
 ],
 "On": [
  null,
  ""
 ],
 "Only $0 of $1 are used.": [
  null,
  ""
 ],
 "Operation '$operation' on $target": [
  null,
  ""
 ],
 "Options": [
  null,
  "Přepínače"
 ],
 "Other Devices": [
  null,
  ""
 ],
 "Overwrite existing data with zeros": [
  null,
  ""
 ],
 "Partition": [
  null,
  "Oddíl"
 ],
 "Partition of $0": [
  null,
  ""
 ],
 "Partitioning": [
  null,
  "Vytváření oddílů"
 ],
 "Passphrase": [
  null,
  "Heslo"
 ],
 "Passphrase cannot be empty": [
  null,
  ""
 ],
 "Passphrases do not match": [
  null,
  ""
 ],
 "Password": [
  null,
  "Heslo"
 ],
 "Path on Server": [
  null,
  ""
 ],
 "Path on server cannot be empty.": [
  null,
  ""
 ],
 "Path on server must start with \"/\".": [
  null,
  ""
 ],
 "Physical": [
  null,
  ""
 ],
 "Physical Volume": [
  null,
  ""
 ],
 "Physical Volumes": [
  null,
  ""
 ],
 "Physical volume of $0": [
  null,
  ""
 ],
 "Physical volumes can not be resized here.": [
  null,
  ""
 ],
 "Please confirm deletion of $0": [
  null,
  ""
 ],
 "Please confirm stopping of $0": [
  null,
  ""
 ],
 "Pool": [
  null,
  "Úložiště"
 ],
 "Pool for Thin Logical Volumes": [
  null,
  ""
 ],
 "Pool for Thin Volumes": [
  null,
  ""
 ],
 "Pool for thinly provisioned volumes": [
  null,
  ""
 ],
 "Port": [
  null,
  "Port"
 ],
 "Purpose": [
  null,
  ""
 ],
 "RAID ($0)": [
  null,
  ""
 ],
 "RAID 0": [
  null,
  ""
 ],
 "RAID 0 (Stripe)": [
  null,
  ""
 ],
 "RAID 1": [
  null,
  ""
 ],
 "RAID 1 (Mirror)": [
  null,
  ""
 ],
 "RAID 10": [
  null,
  ""
 ],
 "RAID 10 (Stripe of Mirrors)": [
  null,
  ""
 ],
 "RAID 4": [
  null,
  ""
 ],
 "RAID 4 (Dedicated Parity)": [
  null,
  ""
 ],
 "RAID 5": [
  null,
  ""
 ],
 "RAID 5 (Distributed Parity)": [
  null,
  ""
 ],
 "RAID 6": [
  null,
  ""
 ],
 "RAID 6 (Double Distributed Parity)": [
  null,
  ""
 ],
 "RAID Device": [
  null,
  "RAID zařízení"
 ],
 "RAID Device $0": [
  null,
  ""
 ],
 "RAID Devices": [
  null,
  "RAID zařízení"
 ],
 "RAID Level": [
  null,
  ""
 ],
 "RAID Member": [
  null,
  ""
 ],
 "Reading": [
  null,
  ""
 ],
 "Reboot": [
  null,
  ""
 ],
 "Recovering": [
  null,
  ""
 ],
 "Recovering RAID Device $target": [
  null,
  ""
 ],
 "Remove device": [
  null,
  ""
 ],
 "Removing $target from RAID Device": [
  null,
  ""
 ],
 "Removing physical volume from $target": [
  null,
  ""
 ],
 "Rename": [
  null,
  ""
 ],
 "Rename Logical Volume": [
  null,
  ""
 ],
 "Rename Volume Group": [
  null,
  ""
 ],
 "Renaming $target": [
  null,
  ""
 ],
 "Repairing $target": [
  null,
  ""
 ],
 "Resizing $target": [
  null,
  ""
 ],
 "Running": [
  null,
  "Běží"
 ],
 "SMART self-test of $target": [
  null,
  ""
 ],
 "Securely erasing $target": [
  null,
  ""
 ],
 "Server": [
  null,
  "Server"
 ],
 "Server Address": [
  null,
  ""
 ],
 "Server address cannot be empty.": [
  null,
  ""
 ],
 "Server cannot be empty.": [
  null,
  ""
 ],
 "Setting up loop device $target": [
  null,
  ""
 ],
 "Shrink": [
  null,
  ""
 ],
 "Shrink Logical Volume": [
  null,
  ""
 ],
 "Size": [
  null,
  "Velikost"
 ],
 "Size cannot be negative": [
  null,
  ""
 ],
 "Size cannot be zero": [
  null,
  ""
 ],
 "Size is too large": [
  null,
  ""
 ],
 "Size must be a number": [
  null,
  ""
 ],
 "Size must be at least $0": [
  null,
  ""
 ],
 "Spare": [
  null,
  ""
 ],
 "Start": [
  null,
  "Start"
 ],
 "Start Multipath": [
  null,
  ""
 ],
 "Start Scrubbing": [
  null,
  ""
 ],
 "Starting RAID Device $target": [
  null,
  ""
 ],
 "Starting swapspace $target": [
  null,
  ""
 ],
 "Stop": [
  null,
  "Zastavit"
 ],
 "Stop Device": [
  null,
  ""
 ],
 "Stop Scrubbing": [
  null,
  ""
 ],
 "Stop and remove": [
  null,
  ""
 ],
 "Stop and unmount": [
  null,
  ""
 ],
 "Stopping RAID Device $target": [
  null,
  ""
 ],
 "Stopping swapspace $target": [
  null,
  ""
 ],
 "Storage": [
  null,
  "Úložiště"
 ],
 "Storage Logs": [
  null,
  ""
 ],
 "Store passphrase": [
  null,
  ""
 ],
 "Stored Passphrase": [
  null,
  ""
 ],
 "Stored passphrase": [
  null,
  ""
 ],
 "Swap": [
  null,
  "Odkládací oddíl"
 ],
 "Synchronizing RAID Device $target": [
  null,
  ""
 ],
 "Targets": [
  null,
  ""
 ],
 "The \"storaged\" API is not available on this system.": [
  null,
  ""
 ],
 "The RAID Array is in a degraded state": [
  null,
  ""
 ],
 "The RAID device must be running in order to add spare disks.": [
  null,
  ""
 ],
 "The RAID device must be running in order to remove disks.": [
  null,
  ""
 ],
 "The creation of this VDO device did not finish and the device can't be used.": [
  null,
  ""
 ],
 "The filesystem is in use by system services or login sessions.                Proceeding will stop these services and sessions.": [
  null,
  ""
 ],
 "The last disk of a RAID device cannot be removed.": [
  null,
  ""
 ],
 "The last physical volume of a volume group cannot be removed.": [
  null,
  ""
 ],
 "The user <b>$0</b> is not permitted to manage storage": [
  null,
  ""
 ],
 "There are devices with multiple paths on the system, but the multipath service is not running.": [
  null,
  ""
 ],
 "There is not enough free space elsewhere to remove this physical volume. At least $0 more free space is needed.": [
  null,
  ""
 ],
 "Thin Logical Volume": [
  null,
  ""
 ],
 "This NFS mount is in use and only its options can be changed.": [
  null,
  ""
 ],
 "This VDO device does not use all of its backing device.": [
  null,
  ""
 ],
 "This device has filesystems that are currently in use.                Proceeding will unmount all filesystems on it.": [
  null,
  ""
 ],
 "This device is currently used for RAID devices.": [
  null,
  ""
 ],
 "This device is currently used for RAID devices.                Proceeding will remove it from its RAID devices.": [
  null,
  ""
 ],
 "This device is currently used for VDO devices.": [
  null,
  ""
 ],
 "This device is currently used for volume groups.": [
  null,
  ""
 ],
 "This device is currently used for volume groups.                Proceeding will remove it from its volume groups.": [
  null,
  ""
 ],
 "This disk cannot be removed while the device is recovering.": [
  null,
  ""
 ],
 "This volume needs to be activated before it can be resized.": [
  null,
  ""
 ],
 "Transfer data asynchronously": [
  null,
  ""
 ],
 "Type": [
  null,
  "Typ"
 ],
 "UUID": [
  null,
  "UUID:"
 ],
 "Unable to reach server": [
  null,
  ""
 ],
 "Unable to remove mount": [
  null,
  ""
 ],
 "Unable to unmount filesystem": [
  null,
  ""
 ],
 "Unknown": [
  null,
  "Neznámý"
 ],
 "Unknown ($0)": [
  null,
  ""
 ],
 "Unknown host name": [
  null,
  ""
 ],
 "Unlock": [
  null,
  ""
 ],
 "Unlock at boot": [
  null,
  ""
 ],
 "Unlock read only": [
  null,
  ""
 ],
 "Unlocking $target": [
  null,
  ""
 ],
 "Unmount": [
  null,
  "Odpojit"
 ],
 "Unmounting $target": [
  null,
  ""
 ],
 "Unrecognized Data": [
  null,
  ""
 ],
 "Unrecognized data can not be made smaller here.": [
  null,
  ""
 ],
 "Unsupported volume": [
  null,
  ""
 ],
 "Usage": [
  null,
  "Použití"
 ],
 "Use 512 Byte emulation": [
  null,
  ""
 ],
 "Used": [
  null,
  ""
 ],
 "Username": [
  null,
  "Jméno uživatele"
 ],
 "VDO Backing": [
  null,
  ""
 ],
 "VDO Device": [
  null,
  ""
 ],
 "VDO Device $0": [
  null,
  ""
 ],
 "VDO Devices": [
  null,
  ""
 ],
 "VDO backing devices can not be made smaller": [
  null,
  ""
 ],
 "VFAT - Compatible with all systems and devices": [
  null,
  ""
 ],
 "Very securely erasing $target": [
  null,
  ""
 ],
 "Volume": [
  null,
  "Svazek"
 ],
 "Volume Group": [
  null,
  "Skupina oddílů"
 ],
 "Volume Group $0": [
  null,
  ""
 ],
 "Volume Groups": [
  null,
  ""
 ],
 "Write-mostly": [
  null,
  ""
 ],
 "Writing": [
  null,
  "Psaní"
 ],
 "XFS - Red Hat Enterprise Linux 7 default": [
  null,
  ""
 ],
 "[$0 bytes of binary data]": [
  null,
  ""
 ],
 "[binary data]": [
  null,
  ""
 ],
 "[no data]": [
  null,
  ""
 ],
 "ext4 - Red Hat Enterprise Linux 6 default": [
  null,
  ""
 ],
 "iSCSI Targets": [
  null,
  ""
 ],
 "unknown target": [
  null,
  ""
 ],
 "unpartitioned space on $0": [
  null,
  ""
 ],
 "storage-id-desc\u0004$0 File System": [
  null,
  "$0 Souborový systém"
 ],
 "storage-id-desc\u0004Encrypted data": [
  null,
  ""
 ],
 "storage-id-desc\u0004Other Data": [
  null,
  ""
 ],
 "storage-id-desc\u0004Swap Space": [
  null,
  ""
 ],
 "storage-id-desc\u0004Unrecognized Data": [
  null,
  ""
 ],
 "storage-id-desc\u0004VDO Backing": [
  null,
  ""
 ],
 "storage\u0004Drive": [
  null,
  "Mechanika"
 ],
 "storage\u0004Hard Disk": [
  null,
  "Pevný disk"
 ],
 "storage\u0004Optical Drive": [
  null,
  ""
 ],
 "storage\u0004Removable Drive": [
  null,
  ""
 ],
 "storage\u0004Solid-State Disk": [
  null,
  ""
 ],
 "format-bytes\u0004bytes": [
  null,
  "byty"
 ]
}));
