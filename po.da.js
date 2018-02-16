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
nplurals=2; plural=(n != 1);
return plural;
},
  "language": "da",
  "x-generator": "Zanata 3.8.4"
 },
 "$0 day": [
  "$0 days",
  "",
  ""
 ],
 "$0 hour": [
  "$0 hours",
  "",
  ""
 ],
 "$0 minute": [
  "$0 minutes",
  "",
  ""
 ],
 "$0 month": [
  "$0 months",
  "",
  ""
 ],
 "$0 of $1": [
  null,
  ""
 ],
 "$0 week": [
  "$0 weeks",
  "",
  ""
 ],
 "$0 year": [
  "$0 years",
  "",
  ""
 ],
 "$name (from $host)": [
  null,
  ""
 ],
 "(default)": [
  null,
  ""
 ],
 "(none)": [
  null,
  ""
 ],
 "1 day": [
  null,
  ""
 ],
 "1 hour": [
  null,
  ""
 ],
 "1 week": [
  null,
  ""
 ],
 "5 minutes": [
  null,
  ""
 ],
 "6 hours": [
  null,
  ""
 ],
 "<span>Encrypted $0</span>": [
  null,
  ""
 ],
 "<span>Encrypted Logical Volume of $0</span>": [
  null,
  ""
 ],
 "<span>Encrypted Partition of $0</span>": [
  null,
  ""
 ],
 "<span>Logical Volume of $0</span>": [
  null,
  ""
 ],
 "<span>Partition of $0</span>": [
  null,
  ""
 ],
 "Activate": [
  null,
  ""
 ],
 "Apply": [
  null,
  ""
 ],
 "Block Device": [
  null,
  ""
 ],
 "Block device for filesystems": [
  null,
  ""
 ],
 "Can't delete while unlocked": [
  null,
  ""
 ],
 "Cancel": [
  null,
  "Annullér"
 ],
 "Close": [
  null,
  ""
 ],
 "Compatible with all systems and devices (MBR)": [
  null,
  ""
 ],
 "Compatible with modern system and hard disks > 2TB (GPT)": [
  null,
  ""
 ],
 "Confirm passphrase": [
  null,
  ""
 ],
 "Content": [
  null,
  ""
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
 "Custom": [
  null,
  ""
 ],
 "Custom (Enter filesystem type)": [
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
 "Default": [
  null,
  ""
 ],
 "Delete": [
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
 "Device $0 is a member of RAID Array $1": [
  null,
  ""
 ],
 "Device $0 is a physical volume of $1": [
  null,
  ""
 ],
 "Device $0 is mounted on $1": [
  null,
  ""
 ],
 "Device is read-only": [
  null,
  ""
 ],
 "Disk is OK": [
  null,
  ""
 ],
 "Disks": [
  null,
  "Disk I/O"
 ],
 "Don't overwrite existing data": [
  null,
  ""
 ],
 "Drive": [
  null,
  ""
 ],
 "Drives": [
  null,
  ""
 ],
 "Edit": [
  null,
  ""
 ],
 "Encrypted EXT4 (LUKS)": [
  null,
  ""
 ],
 "Encrypted XFS (LUKS)": [
  null,
  ""
 ],
 "Encryption": [
  null,
  ""
 ],
 "Encryption Options": [
  null,
  ""
 ],
 "Erase": [
  null,
  ""
 ],
 "Error": [
  null,
  ""
 ],
 "Extended Partition": [
  null,
  ""
 ],
 "Filesystem": [
  null,
  ""
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
  ""
 ],
 "Format": [
  null,
  ""
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
  ""
 ],
 "Free Space": [
  null,
  ""
 ],
 "Go to now": [
  null,
  ""
 ],
 "Inactive volume": [
  null,
  ""
 ],
 "Jobs": [
  null,
  ""
 ],
 "Lock": [
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
 "Mount": [
  null,
  ""
 ],
 "Mount Options": [
  null,
  "Indstillinger"
 ],
 "Mount Point": [
  null,
  ""
 ],
 "Mounted At": [
  null,
  "Indstillinger"
 ],
 "Mounting": [
  null,
  ""
 ],
 "NTFS - Compatible with most systems": [
  null,
  ""
 ],
 "Name": [
  null,
  "Værtsnavn"
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
 "No Filesystem": [
  null,
  ""
 ],
 "No Logical Volumes": [
  null,
  ""
 ],
 "No drives attached": [
  null,
  ""
 ],
 "No free space": [
  null,
  ""
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
 "No volume groups created": [
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
 "Options": [
  null,
  "Indstillinger"
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
  ""
 ],
 "Partitioning": [
  null,
  ""
 ],
 "Passphrase": [
  null,
  ""
 ],
 "Passphrase cannot be empty": [
  null,
  ""
 ],
 "Passphrases do not match": [
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
 "Please confirm deletion of $0": [
  null,
  ""
 ],
 "Pool": [
  null,
  "Værtsnavn"
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
 "Purpose": [
  null,
  ""
 ],
 "RAID Device": [
  null,
  ""
 ],
 "RAID Device $0": [
  null,
  ""
 ],
 "RAID Devices": [
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
 "Rename": [
  null,
  ""
 ],
 "Rename Logical Volume": [
  null,
  ""
 ],
 "Resize": [
  null,
  ""
 ],
 "Resize Filesystem": [
  null,
  ""
 ],
 "Resize Logical Volume": [
  null,
  ""
 ],
 "Size": [
  null,
  ""
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
 "Start": [
  null,
  ""
 ],
 "Start Multipath": [
  null,
  ""
 ],
 "Stop": [
  null,
  ""
 ],
 "Storage": [
  null,
  ""
 ],
 "Storage Log": [
  null,
  ""
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
 "The user <b>$0</b> is not permitted to manage storage": [
  null,
  ""
 ],
 "There are devices with multiple paths on the system, but the multipath service is not running.": [
  null,
  ""
 ],
 "Thin Logical Volume": [
  null,
  ""
 ],
 "This logical volume cannot be made smaller.": [
  null,
  ""
 ],
 "Type": [
  null,
  ""
 ],
 "UUID": [
  null,
  ""
 ],
 "Unknown": [
  null,
  ""
 ],
 "Unlock": [
  null,
  ""
 ],
 "Unmount": [
  null,
  ""
 ],
 "Unrecognized Data": [
  null,
  ""
 ],
 "Unsupported volume": [
  null,
  ""
 ],
 "Usage": [
  null,
  ""
 ],
 "Used": [
  null,
  ""
 ],
 "VFAT - Compatible with all systems and devices": [
  null,
  ""
 ],
 "Volume": [
  null,
  ""
 ],
 "Volume Group": [
  null,
  ""
 ],
 "Volume Group $0": [
  null,
  ""
 ],
 "Volume Groups": [
  null,
  ""
 ],
 "Writing": [
  null,
  ""
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
 "storage-id-desc\u0004$0 File System": [
  null,
  ""
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
 "storage\u0004Assessment": [
  null,
  ""
 ],
 "storage\u0004Bitmap": [
  null,
  ""
 ],
 "storage\u0004Capacity": [
  null,
  ""
 ],
 "storage\u0004Device": [
  null,
  ""
 ],
 "storage\u0004Device File": [
  null,
  "Værtsnavn"
 ],
 "storage\u0004Firmware Version": [
  null,
  "Version"
 ],
 "storage\u0004Model": [
  null,
  ""
 ],
 "storage\u0004Multipathed Devices": [
  null,
  ""
 ],
 "storage\u0004RAID Level": [
  null,
  ""
 ],
 "storage\u0004Serial Number": [
  null,
  ""
 ],
 "storage\u0004State": [
  null,
  "Tilstand"
 ],
 "storage\u0004UUID": [
  null,
  ""
 ],
 "storage\u0004World Wide Name": [
  null,
  "Værtsnavn"
 ],
 "format-bytes\u0004bytes": [
  null,
  ""
 ]
}));
