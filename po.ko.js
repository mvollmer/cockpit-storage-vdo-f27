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
nplurals=1; plural=0;
return plural;
},
  "language": "ko",
  "x-generator": "Zanata 3.9.6"
 },
 "$0 Block Device": [
  null,
  ""
 ],
 "$0 Chunk Size": [
  null,
  ""
 ],
 "$0 Disks": [
  null,
  ""
 ],
 "$0 data + $1 overhead used of $2 ($3)": [
  null,
  ""
 ],
 "$0 day": [
  "$0 days",
  ""
 ],
 "$0 disk is missing": [
  "$0 disks are missing",
  ""
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
  ""
 ],
 "$0 is in active use": [
  null,
  ""
 ],
 "$0 minute": [
  "$0 minutes",
  ""
 ],
 "$0 month": [
  "$0 months",
  ""
 ],
 "$0 of $1": [
  null,
  ""
 ],
 "$0 used of $1 ($2 saved)": [
  null,
  ""
 ],
 "$0 week": [
  "$0 weeks",
  ""
 ],
 "$0 year": [
  "$0 years",
  ""
 ],
 "$0, $1 free": [
  null,
  ""
 ],
 "$name (from $host)": [
  null,
  "$name ($host에서)"
 ],
 "${size} ${desc}": [
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
 "1 MiB": [
  null,
  ""
 ],
 "1 day": [
  null,
  "1 일"
 ],
 "1 hour": [
  null,
  "1 시간"
 ],
 "1 week": [
  null,
  "1 주"
 ],
 "128 KiB": [
  null,
  ""
 ],
 "16 KiB": [
  null,
  ""
 ],
 "2 MiB": [
  null,
  ""
 ],
 "32 KiB": [
  null,
  ""
 ],
 "4 KiB": [
  null,
  ""
 ],
 "5 minutes": [
  null,
  "5분"
 ],
 "512 KiB": [
  null,
  ""
 ],
 "6 hours": [
  null,
  "6 시간"
 ],
 "64 KiB": [
  null,
  ""
 ],
 "8 KiB": [
  null,
  ""
 ],
 "A disk is needed.": [
  null,
  ""
 ],
 "A spare disk needs to be added first before this disk can be removed.": [
  null,
  ""
 ],
 "Activate": [
  null,
  ""
 ],
 "Activating $target": [
  null,
  ""
 ],
 "Add": [
  null,
  "추가"
 ],
 "Add Disks": [
  null,
  "디스크 추가"
 ],
 "Add iSCSI Portal": [
  null,
  ""
 ],
 "Adding physical volume to $target": [
  null,
  ""
 ],
 "Address": [
  null,
  "주소"
 ],
 "Apply": [
  null,
  "적용"
 ],
 "At least $0 disks are needed.": [
  null,
  "최소 $0 개의 디스크가 필요합니다."
 ],
 "At least one disk is needed.": [
  null,
  "최소 1개의 디스크가 필요합니다."
 ],
 "Authentication required": [
  null,
  ""
 ],
 "Available targets on $0": [
  null,
  ""
 ],
 "Backing Device": [
  null,
  ""
 ],
 "Block": [
  null,
  ""
 ],
 "Block device for filesystems": [
  null,
  ""
 ],
 "Blocked": [
  null,
  ""
 ],
 "Can't delete while unlocked": [
  null,
  ""
 ],
 "Cancel": [
  null,
  "취소"
 ],
 "Change": [
  null,
  ""
 ],
 "Change iSCSI Initiator Name": [
  null,
  ""
 ],
 "Checking $target": [
  null,
  ""
 ],
 "Checking RAID Device $target": [
  null,
  ""
 ],
 "Checking and Repairing RAID Device $target": [
  null,
  ""
 ],
 "Chunk Size": [
  null,
  ""
 ],
 "Cleaning up for $target": [
  null,
  ""
 ],
 "Close": [
  null,
  "닫기"
 ],
 "Compatible with all systems and devices (MBR)": [
  null,
  "모든 시스템과 장치와 호환됩니다 (MBR)"
 ],
 "Compatible with modern system and hard disks > 2TB (GPT)": [
  null,
  "최신 시스템과 2TB 이상의 하드 디스크와 호환됩니다 (GPT)"
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
  ""
 ],
 "Create": [
  null,
  "생성"
 ],
 "Create Logical Volume": [
  null,
  "논리 볼륨 이름 바꾸기"
 ],
 "Create Partition": [
  null,
  ""
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
  "볼륨 그룹 생성"
 ],
 "Create new Logical Volume": [
  null,
  ""
 ],
 "Create partition": [
  null,
  "파티션 생성"
 ],
 "Create partition on $0": [
  null,
  "$0에 파티션 만들기"
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
  "사용자 지정"
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
  "기본"
 ],
 "Delete": [
  null,
  "삭제"
 ],
 "Deleting $target": [
  null,
  ""
 ],
 "Deleting a RAID device will erase all data on it.": [
  null,
  "RAID 장치를 제거하면 내부의 모든 데이터를 지우게 됩니다."
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
  "디스크 추가"
 ],
 "Disk is OK": [
  null,
  ""
 ],
 "Disks": [
  null,
  ""
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
 "Erasing $target": [
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
 "FAILED": [
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
  "포멧"
 ],
 "Format $0": [
  null,
  ""
 ],
 "Format Disk $0": [
  null,
  "디스크 $0 포멧"
 ],
 "Formatting a disk will erase all data on it.": [
  null,
  "디스크를 포멧하면 내부의 모든 데이터를 지우게 됩니다."
 ],
 "Formatting a storage device will erase all data on it.": [
  null,
  "장치를 포멧하면 내부의 모든 데이터를 지우게 됩니다."
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
  "지금 바로 가기"
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
  ""
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
  "논리 볼륨"
 ],
 "Logical Volume (Snapshot)": [
  null,
  "논리 볼륨 (스냅샷)"
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
  "마운트 옵션"
 ],
 "Mount Point": [
  null,
  "마운트 포인트"
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
  "마운트"
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
  "이름"
 ],
 "Name can not be empty.": [
  null,
  "이름을 입력하셔야 합니다."
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
  "다음"
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
  "파티션 설정하지 않음"
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
  "찾을 수 없습니다."
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
  "비활성"
 ],
 "On": [
  null,
  "활성"
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
  "옵션"
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
 "Partition of $0": [
  null,
  ""
 ],
 "Partitioning": [
  null,
  "파티션"
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
 "Password": [
  null,
  "암호"
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
  "$0 삭제를 확인해주세요"
 ],
 "Please confirm stopping of $0": [
  null,
  ""
 ],
 "Pool": [
  null,
  ""
 ],
 "Pool for Thin Logical Volumes": [
  null,
  "Thin 논리 볼륨을 위한 풀"
 ],
 "Pool for Thin Volumes": [
  null,
  ""
 ],
 "Pool for thinly provisioned volumes": [
  null,
  "Thin 논리 볼륨을 위한 풀"
 ],
 "Port": [
  null,
  ""
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
  ""
 ],
 "RAID Device $0": [
  null,
  "RAID 장치 $0"
 ],
 "RAID Devices": [
  null,
  ""
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
  "작동중"
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
  ""
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
  ""
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
  ""
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
  "저장된 암호"
 ],
 "Stored passphrase": [
  null,
  ""
 ],
 "Swap": [
  null,
  ""
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
  "Thin 논리 볼륨"
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
  ""
 ],
 "UUID": [
  null,
  ""
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
  "알 수 없음"
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
  "잠금 해제"
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
  ""
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
  ""
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
  "사용자 이름"
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
  "논리 볼륨"
 ],
 "Volume Group": [
  null,
  ""
 ],
 "Volume Group $0": [
  null,
  "볼륨 그룹 $0"
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
 "storage-id-desc\u0004VDO Backing": [
  null,
  ""
 ],
 "storage\u0004Drive": [
  null,
  ""
 ],
 "storage\u0004Hard Disk": [
  null,
  ""
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
  "바이트"
 ]
}));
