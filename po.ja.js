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
  "language": "ja",
  "x-generator": "Zanata 3.9.6"
 },
 "$0 Block Device": [
  null,
  "$0 ブロックデバイス"
 ],
 "$0 Chunk Size": [
  null,
  "$0 チャンクサイズ"
 ],
 "$0 Disks": [
  null,
  "$0 ディスク"
 ],
 "$0 data + $1 overhead used of $2 ($3)": [
  null,
  ""
 ],
 "$0 day": [
  "$0 days",
  "$0 日"
 ],
 "$0 disk is missing": [
  "$0 disks are missing",
  "$0 ディスクがありません"
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
  "$0 時間"
 ],
 "$0 is in active use": [
  null,
  ""
 ],
 "$0 minute": [
  "$0 minutes",
  "$0 分"
 ],
 "$0 month": [
  "$0 months",
  "$0 ヶ月"
 ],
 "$0 of $1": [
  null,
  "$0/$1"
 ],
 "$0 used of $1 ($2 saved)": [
  null,
  ""
 ],
 "$0 week": [
  "$0 weeks",
  "$0 週"
 ],
 "$0 year": [
  "$0 years",
  "$0 年"
 ],
 "$0, $1 free": [
  null,
  "$0, $1 空き"
 ],
 "$name (from $host)": [
  null,
  "$name ($host)"
 ],
 "${size} ${desc}": [
  null,
  "${size} ${desc}"
 ],
 "(default)": [
  null,
  "(デフォルト)"
 ],
 "(none)": [
  null,
  "（なし）"
 ],
 "1 MiB": [
  null,
  "1 MiB"
 ],
 "1 day": [
  null,
  "1 日"
 ],
 "1 hour": [
  null,
  "1 時間"
 ],
 "1 week": [
  null,
  "1 週間"
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
  "5 分"
 ],
 "512 KiB": [
  null,
  "512 KiB"
 ],
 "6 hours": [
  null,
  "6 時間"
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
  "このディスクを削除する前に、スペアディスクを追加する必要があります。"
 ],
 "Activate": [
  null,
  "有効化"
 ],
 "Activating $target": [
  null,
  "$target のアクティベート"
 ],
 "Add": [
  null,
  "追加する"
 ],
 "Add Disks": [
  null,
  "ディスクの追加"
 ],
 "Add iSCSI Portal": [
  null,
  "iSCSI ポータルの追加"
 ],
 "Adding physical volume to $target": [
  null,
  "$target への物理ボリュームの追加"
 ],
 "Address": [
  null,
  "アドレス:"
 ],
 "Apply": [
  null,
  "適用"
 ],
 "At least $0 disks are needed.": [
  null,
  "少なくとも $0 ディスクが必要です。"
 ],
 "At least one disk is needed.": [
  null,
  "少なくとも 1 つのディスクが必要です。"
 ],
 "Authentication required": [
  null,
  "認証が必要です"
 ],
 "Available targets on $0": [
  null,
  "$0 で利用可能なターゲット"
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
  "ファイルシステム用ブロックデバイス"
 ],
 "Blocked": [
  null,
  "ブロック済み"
 ],
 "Can't delete while unlocked": [
  null,
  "ロック解除されている間は削除できません"
 ],
 "Cancel": [
  null,
  "取り消し"
 ],
 "Change": [
  null,
  "変更"
 ],
 "Change iSCSI Initiator Name": [
  null,
  "iSCSI イニシエーター名の変更"
 ],
 "Checking $target": [
  null,
  ""
 ],
 "Checking RAID Device $target": [
  null,
  "RAID デバイス $target の確認"
 ],
 "Checking and Repairing RAID Device $target": [
  null,
  "RAID デバイス $target の確認および修復"
 ],
 "Chunk Size": [
  null,
  "チャンクサイズ"
 ],
 "Cleaning up for $target": [
  null,
  "$target のクリーンアップ"
 ],
 "Close": [
  null,
  "閉じる"
 ],
 "Compatible with all systems and devices (MBR)": [
  null,
  "すべてのシステムおよびデバイスとの互換性あり (MBR)"
 ],
 "Compatible with modern system and hard disks > 2TB (GPT)": [
  null,
  "最新のシステムとの互換性があり、ハードディスクが 2TB よりも大きい (GPT)"
 ],
 "Compression": [
  null,
  "圧縮"
 ],
 "Confirm passphrase": [
  null,
  "パスフレーズの確認"
 ],
 "Content": [
  null,
  "コンテンツ"
 ],
 "Create": [
  null,
  "作成"
 ],
 "Create Logical Volume": [
  null,
  "論理ボリュームの作成"
 ],
 "Create Partition": [
  null,
  "パーティションの作成"
 ],
 "Create RAID Device": [
  null,
  "RAID デバイスの作成"
 ],
 "Create Snapshot": [
  null,
  "スナップショットの作成"
 ],
 "Create Thin Volume": [
  null,
  "シンボリュームの作成"
 ],
 "Create VDO Device": [
  null,
  ""
 ],
 "Create Volume Group": [
  null,
  "ボリュームグループの作成"
 ],
 "Create new Logical Volume": [
  null,
  "新規論理ボリュームの作成"
 ],
 "Create partition": [
  null,
  "パーティションの作成"
 ],
 "Create partition on $0": [
  null,
  "$0 上でのパーティションの作成"
 ],
 "Create partition table": [
  null,
  "パーティションテーブルの作成"
 ],
 "Creating RAID Device $target": [
  null,
  "RAID デバイス $target の作成"
 ],
 "Creating filesystem on $target": [
  null,
  "$target 上でのファイルシステムの作成"
 ],
 "Creating logical volume $target": [
  null,
  "論理ボリューム $target の作成"
 ],
 "Creating partition $target": [
  null,
  "パーティション $target の作成"
 ],
 "Creating snapshot of $target": [
  null,
  "$target のスナップショットの作成"
 ],
 "Creating volume group $target": [
  null,
  "ボリュームグループ $target の作成"
 ],
 "Custom": [
  null,
  "Custom"
 ],
 "Custom (Enter filesystem type)": [
  null,
  "カスタム (ファイルシステムタイプの入力)"
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
  "ディスクで障害が発生中"
 ],
 "Data Used": [
  null,
  "使用済みデータ"
 ],
 "Deactivate": [
  null,
  "解除"
 ],
 "Deactivating $target": [
  null,
  "$target の非アクティブ化"
 ],
 "Deduplication": [
  null,
  ""
 ],
 "Default": [
  null,
  "デフォルト"
 ],
 "Delete": [
  null,
  "削除"
 ],
 "Deleting $target": [
  null,
  "$target の削除中"
 ],
 "Deleting a RAID device will erase all data on it.": [
  null,
  "RAID デバイスを削除すると、そのデバイス上のすべてのデータが削除されます。"
 ],
 "Deleting a VDO device will erase all data on it.": [
  null,
  ""
 ],
 "Deleting a logical volume will delete all data in it.": [
  null,
  "論理ボリュームを削除すると、論理ボリューム内のすべてのデータが削除されます。"
 ],
 "Deleting a partition will delete all data in it.": [
  null,
  "パーティションを削除すると、パーティション内のすべてのデータが削除されます。"
 ],
 "Deleting a volume group will erase all data on it.": [
  null,
  "ボリュームグループを削除すると、ボリュームグループ上のすべてのデータが削除されます。"
 ],
 "Deleting volume group $target": [
  null,
  "ボリュームグループ $target の削除"
 ],
 "Device File": [
  null,
  ""
 ],
 "Device is read-only": [
  null,
  "デバイスは読み取り専用です"
 ],
 "Disk": [
  null,
  "ディスク"
 ],
 "Disk is OK": [
  null,
  "ディスクは OK です"
 ],
 "Disks": [
  null,
  "ディスク"
 ],
 "Don't overwrite existing data": [
  null,
  "既存のデータを上書きしないでください"
 ],
 "Drive": [
  null,
  "ドライブ"
 ],
 "Drives": [
  null,
  "ドライブ"
 ],
 "Edit": [
  null,
  "編集"
 ],
 "Ejecting $target": [
  null,
  "$target の取り出し中"
 ],
 "Emptying $target": [
  null,
  "$target を空にしています"
 ],
 "Encrypted $0": [
  null,
  "暗号化されたデータ"
 ],
 "Encrypted EXT4 (LUKS)": [
  null,
  "暗号化された EXT4 (LUKS)"
 ],
 "Encrypted Logical Volume of $0": [
  null,
  "<span>暗号化された $0 の論理ボリューム</span>"
 ],
 "Encrypted Partition of $0": [
  null,
  "<span>暗号化された $0 のパーティション</span>†"
 ],
 "Encrypted XFS (LUKS)": [
  null,
  "暗号化された XFS (LUKS)"
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
  "暗号化"
 ],
 "Encryption Options": [
  null,
  "暗号化オプション"
 ],
 "Erase": [
  null,
  "削除"
 ],
 "Erasing $target": [
  null,
  "$target の削除中"
 ],
 "Error": [
  null,
  "エラー"
 ],
 "Extended Partition": [
  null,
  "拡張パーティション"
 ],
 "FAILED": [
  null,
  "失敗"
 ],
 "Filesystem": [
  null,
  "ファイルシステム"
 ],
 "Filesystem Mounting": [
  null,
  "ファイルシステムのマウント"
 ],
 "Filesystem Name": [
  null,
  "ファイルシステム名"
 ],
 "Filesystem type": [
  null,
  "ファイルシステムタイプ"
 ],
 "Filesystems": [
  null,
  "ファイルシステム"
 ],
 "Format": [
  null,
  "フォーマット"
 ],
 "Format $0": [
  null,
  "$0 のフォーマット"
 ],
 "Format Disk $0": [
  null,
  "ディスク $0 のフォーマット"
 ],
 "Formatting a disk will erase all data on it.": [
  null,
  "ディスクをフォーマットすると、ディスク上のすべてのデータが削除されます。"
 ],
 "Formatting a storage device will erase all data on it.": [
  null,
  "ストレージデバイスをフォーマットすると、そのデバイス上のすべてのデータが削除されます。"
 ],
 "Free": [
  null,
  "空き"
 ],
 "Free Space": [
  null,
  "空き領域"
 ],
 "Go to now": [
  null,
  "今すぐ移動"
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
  "同期"
 ],
 "Inactive volume": [
  null,
  "非アクティブなボリューム"
 ],
 "Index Memory": [
  null,
  ""
 ],
 "Invalid username or password": [
  null,
  "無効なユーザー名またはパスワード"
 ],
 "Jobs": [
  null,
  "ジョブ"
 ],
 "Local Mount Point": [
  null,
  ""
 ],
 "Lock": [
  null,
  "ロック"
 ],
 "Locking $target": [
  null,
  "$target のロック中"
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
  "論理ボリューム"
 ],
 "Logical Volume (Snapshot)": [
  null,
  "論理ボリューム (スナップショット)"
 ],
 "Logical Volume of $0": [
  null,
  "論理ボリューム"
 ],
 "Marking $target as faulty": [
  null,
  "$target を問題があるものとしてマークする"
 ],
 "Member of RAID Device": [
  null,
  "RAID デバイスのメンバー"
 ],
 "Member of RAID Device $0": [
  null,
  "RAID デバイス $0 のメンバー"
 ],
 "Metadata Used": [
  null,
  "使用済みメタデータ"
 ],
 "Modifying $target": [
  null,
  "$target の変更"
 ],
 "Mount": [
  null,
  "マウント"
 ],
 "Mount Options": [
  null,
  "マウントオプション"
 ],
 "Mount Point": [
  null,
  "マウントポイント"
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
  "マウント場所"
 ],
 "Mounting": [
  null,
  "マウント"
 ],
 "Mounting $target": [
  null,
  "$target のマウント"
 ],
 "NFS Mount": [
  null,
  "NFS マウント"
 ],
 "NFS Mounts": [
  null,
  ""
 ],
 "NTFS - Compatible with most systems": [
  null,
  "NTFS - 最新システムとの互換性あり"
 ],
 "Name": [
  null,
  "名前"
 ],
 "Name can not be empty.": [
  null,
  ""
 ],
 "Name cannot be empty.": [
  null,
  "名前は空にすることができません。"
 ],
 "Name cannot be longer than 127 characters.": [
  null,
  "名前は 127 文字を超えることができません。"
 ],
 "Name cannot contain the character '$0'.": [
  null,
  "名前には文字 '$0' を含めることができません。"
 ],
 "Name cannot contain whitespace.": [
  null,
  "名前にはスペースを含めることができません。"
 ],
 "New NFS Mount": [
  null,
  ""
 ],
 "Next": [
  null,
  "次へ"
 ],
 "No Filesystem": [
  null,
  "ファイルシステムなし"
 ],
 "No Logical Volumes": [
  null,
  "論理ボリュームなし"
 ],
 "No NFS mounts set up": [
  null,
  ""
 ],
 "No disks are available.": [
  null,
  "ディスクが利用できません。"
 ],
 "No drives attached": [
  null,
  "ドライブが割り当てられていません"
 ],
 "No free space": [
  null,
  "空き領域なし"
 ],
 "No iSCSI targets set up": [
  null,
  "iSCSI ターゲットが設定されていません"
 ],
 "No media inserted": [
  null,
  "メディアが挿入されていません"
 ],
 "No partitioning": [
  null,
  "パーティションなし"
 ],
 "No storage set up as RAID": [
  null,
  "RAID として設定されたストレージがありません"
 ],
 "No storage set up as VDO": [
  null,
  ""
 ],
 "No volume groups created": [
  null,
  "ボリュームグループが作成されていません"
 ],
 "Not found": [
  null,
  "見つかりません"
 ],
 "Not mounted": [
  null,
  ""
 ],
 "Not running": [
  null,
  "実行中ではありません"
 ],
 "Off": [
  null,
  "オフ"
 ],
 "On": [
  null,
  "オン"
 ],
 "Only $0 of $1 are used.": [
  null,
  ""
 ],
 "Operation '$operation' on $target": [
  null,
  "$target 上の操作 '$operation'"
 ],
 "Options": [
  null,
  "オプション"
 ],
 "Other Devices": [
  null,
  "他のデバイス"
 ],
 "Overwrite existing data with zeros": [
  null,
  "既存のデータをゼロで上書きする"
 ],
 "Partition": [
  null,
  "パーティション"
 ],
 "Partition of $0": [
  null,
  "パーティション"
 ],
 "Partitioning": [
  null,
  "パーティション構成"
 ],
 "Passphrase": [
  null,
  "パスフレーズ"
 ],
 "Passphrase cannot be empty": [
  null,
  "パスフレーズは空にすることができません"
 ],
 "Passphrases do not match": [
  null,
  "パスフレーズが一致しません"
 ],
 "Password": [
  null,
  "パスワード"
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
  "物理ボリューム"
 ],
 "Physical Volumes": [
  null,
  "物理ボリューム"
 ],
 "Physical volume of $0": [
  null,
  "$0 の物理ボリューム"
 ],
 "Physical volumes can not be resized here.": [
  null,
  ""
 ],
 "Please confirm deletion of $0": [
  null,
  "$0 の削除を確定してください"
 ],
 "Please confirm stopping of $0": [
  null,
  ""
 ],
 "Pool": [
  null,
  "プール"
 ],
 "Pool for Thin Logical Volumes": [
  null,
  "シン論理ボリューム用プール"
 ],
 "Pool for Thin Volumes": [
  null,
  "シンボリューム用プール"
 ],
 "Pool for thinly provisioned volumes": [
  null,
  "シンプロビジョニングされたボリューム用プール"
 ],
 "Port": [
  null,
  "ポート"
 ],
 "Purpose": [
  null,
  "目的"
 ],
 "RAID ($0)": [
  null,
  "RAID ($0)"
 ],
 "RAID 0": [
  null,
  "RAID 0"
 ],
 "RAID 0 (Stripe)": [
  null,
  "RAID 0 (ストライプ)"
 ],
 "RAID 1": [
  null,
  "RAID 1"
 ],
 "RAID 1 (Mirror)": [
  null,
  "RAID 1 (ミラー)"
 ],
 "RAID 10": [
  null,
  "RAID 10"
 ],
 "RAID 10 (Stripe of Mirrors)": [
  null,
  "RAID 10 (ミラーのストライプ)"
 ],
 "RAID 4": [
  null,
  "RAID 4"
 ],
 "RAID 4 (Dedicated Parity)": [
  null,
  "RAID 4 (専用パリティー)"
 ],
 "RAID 5": [
  null,
  "RAID 5"
 ],
 "RAID 5 (Distributed Parity)": [
  null,
  "RAID 5 (分散パリティー)"
 ],
 "RAID 6": [
  null,
  "RAID 6"
 ],
 "RAID 6 (Double Distributed Parity)": [
  null,
  "RAID 6 (ダブル分散パリティー)"
 ],
 "RAID Device": [
  null,
  "RAID デバイス"
 ],
 "RAID Device $0": [
  null,
  "RAID デバイス $0"
 ],
 "RAID Devices": [
  null,
  "RAID デバイス"
 ],
 "RAID Level": [
  null,
  "RAID レベル"
 ],
 "RAID Member": [
  null,
  "RAID メンバー"
 ],
 "Reading": [
  null,
  "読み取り中"
 ],
 "Reboot": [
  null,
  "再起動"
 ],
 "Recovering": [
  null,
  "復旧"
 ],
 "Recovering RAID Device $target": [
  null,
  "RAID デバイス $target の復旧"
 ],
 "Remove device": [
  null,
  ""
 ],
 "Removing $target from RAID Device": [
  null,
  "$target を RAID デバイスから削除"
 ],
 "Removing physical volume from $target": [
  null,
  "$target  から物理ボリュームを削除"
 ],
 "Rename": [
  null,
  "名前変更"
 ],
 "Rename Logical Volume": [
  null,
  "論理ボリュームの名前変更"
 ],
 "Rename Volume Group": [
  null,
  "ボリュームグループの名前変更"
 ],
 "Renaming $target": [
  null,
  "$target の名前変更"
 ],
 "Repairing $target": [
  null,
  ""
 ],
 "Resizing $target": [
  null,
  "$target のサイズ変更"
 ],
 "Running": [
  null,
  "実行中"
 ],
 "SMART self-test of $target": [
  null,
  "$target の SMART 自己テスト"
 ],
 "Securely erasing $target": [
  null,
  "$target を安全に削除"
 ],
 "Server": [
  null,
  "サーバー"
 ],
 "Server Address": [
  null,
  "サーバーアドレス"
 ],
 "Server address cannot be empty.": [
  null,
  "サーバーアドレスは空にできません。"
 ],
 "Server cannot be empty.": [
  null,
  ""
 ],
 "Setting up loop device $target": [
  null,
  "ループデバイス $target の設定"
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
  "Size"
 ],
 "Size cannot be negative": [
  null,
  "サイズはマイナスにすることができません"
 ],
 "Size cannot be zero": [
  null,
  "サイズはゼロにすることができません"
 ],
 "Size is too large": [
  null,
  "サイズが大きすぎます"
 ],
 "Size must be a number": [
  null,
  "サイズは数値である必要があります"
 ],
 "Size must be at least $0": [
  null,
  ""
 ],
 "Spare": [
  null,
  "スペア"
 ],
 "Start": [
  null,
  "開始日"
 ],
 "Start Multipath": [
  null,
  "マルチパスの開始"
 ],
 "Start Scrubbing": [
  null,
  "Scrubbing の起動"
 ],
 "Starting RAID Device $target": [
  null,
  "RAID デバイス $target の起動"
 ],
 "Starting swapspace $target": [
  null,
  "スワップ領域 $target の起動"
 ],
 "Stop": [
  null,
  "停止"
 ],
 "Stop Device": [
  null,
  ""
 ],
 "Stop Scrubbing": [
  null,
  "Scrubbing の停止"
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
  "RAID デバイス $target の停止"
 ],
 "Stopping swapspace $target": [
  null,
  "スワップ領域 $target の停止"
 ],
 "Storage": [
  null,
  "ストレージ"
 ],
 "Storage Logs": [
  null,
  "ストレージログ"
 ],
 "Store passphrase": [
  null,
  "パスフレーズの保存"
 ],
 "Stored Passphrase": [
  null,
  "保存されたパスフレーズ"
 ],
 "Stored passphrase": [
  null,
  "保存されたパスフレーズ"
 ],
 "Swap": [
  null,
  "スワップ"
 ],
 "Synchronizing RAID Device $target": [
  null,
  "RAID デバイス $target の同期"
 ],
 "Targets": [
  null,
  "ターゲット"
 ],
 "The \"storaged\" API is not available on this system.": [
  null,
  "\"storaged\" API はこのシステムでは利用できません。"
 ],
 "The RAID Array is in a degraded state": [
  null,
  "RAID アレイは劣化状態にあります"
 ],
 "The RAID device must be running in order to add spare disks.": [
  null,
  "スペアディスクを追加する場合は、MDRAID デバイスが実行中である必要があります。"
 ],
 "The RAID device must be running in order to remove disks.": [
  null,
  "ディスクを取り外す場合は、RAID デバイスが実行中である必要があります。"
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
  "RAID デバイスの最後のディスクは取り外すことができません。"
 ],
 "The last physical volume of a volume group cannot be removed.": [
  null,
  "ボリュームグループの最後の物理ボリュームは削除できません。"
 ],
 "The user <b>$0</b> is not permitted to manage storage": [
  null,
  "ユーザー <b>$0</b> はストレージを管理することを許可されていません"
 ],
 "There are devices with multiple paths on the system, but the multipath service is not running.": [
  null,
  "システムに複数のパスを持つデバイスがありますが、マルチパスサービスが実行されていません。"
 ],
 "There is not enough free space elsewhere to remove this physical volume. At least $0 more free space is needed.": [
  null,
  "この物理ボリュームを削除するのに十分な空き領域がありません。少なくとも $0 の空き領域が必要です。"
 ],
 "Thin Logical Volume": [
  null,
  "シン論理ボリューム"
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
  "このディスクは、デバイスが復旧中に取り外すことができません。"
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
  "タイプ"
 ],
 "UUID": [
  null,
  "UUID"
 ],
 "Unable to reach server": [
  null,
  "サーバーに到達できません"
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
  "不明"
 ],
 "Unknown ($0)": [
  null,
  "不明な ($0)"
 ],
 "Unknown host name": [
  null,
  "不明なホスト名"
 ],
 "Unlock": [
  null,
  "ロック解除"
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
  "$target をロック解除中"
 ],
 "Unmount": [
  null,
  "アンマウント"
 ],
 "Unmounting $target": [
  null,
  "$target のアンマウント中"
 ],
 "Unrecognized Data": [
  null,
  "認識されないデータ"
 ],
 "Unrecognized data can not be made smaller here.": [
  null,
  ""
 ],
 "Unsupported volume": [
  null,
  "サポートされないボリューム"
 ],
 "Usage": [
  null,
  "使用法"
 ],
 "Use 512 Byte emulation": [
  null,
  ""
 ],
 "Used": [
  null,
  "Used"
 ],
 "Username": [
  null,
  "ユーザー名"
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
  "VFAT - すべてのシステムおよびデバイスとの互換性あり"
 ],
 "Very securely erasing $target": [
  null,
  "$target を非常に安全に削除"
 ],
 "Volume": [
  null,
  "音量"
 ],
 "Volume Group": [
  null,
  "ボリュームグループ"
 ],
 "Volume Group $0": [
  null,
  "ボリュームグループ $0"
 ],
 "Volume Groups": [
  null,
  "ボリュームグループ"
 ],
 "Write-mostly": [
  null,
  "Write-mostly"
 ],
 "Writing": [
  null,
  "書き込み"
 ],
 "XFS - Red Hat Enterprise Linux 7 default": [
  null,
  "XFS - Red Hat Enterprise Linux 7 のデフォルト値"
 ],
 "[$0 bytes of binary data]": [
  null,
  "[バイナリーデータの $0 バイト]"
 ],
 "[binary data]": [
  null,
  "[バイナリーデータ]"
 ],
 "[no data]": [
  null,
  "[データなし]"
 ],
 "ext4 - Red Hat Enterprise Linux 6 default": [
  null,
  "ext4 - Red Hat Enterprise Linux 6 のデフォルト値"
 ],
 "iSCSI Targets": [
  null,
  "iSCSI ターゲット"
 ],
 "unknown target": [
  null,
  "不明なターゲット"
 ],
 "unpartitioned space on $0": [
  null,
  "$0 の未パーティション領域"
 ],
 "storage-id-desc\u0004$0 File System": [
  null,
  "$0 ファイルシステム"
 ],
 "storage-id-desc\u0004Encrypted data": [
  null,
  "暗号化されたデータ"
 ],
 "storage-id-desc\u0004Other Data": [
  null,
  "他のデータ"
 ],
 "storage-id-desc\u0004Swap Space": [
  null,
  "スワップ領域"
 ],
 "storage-id-desc\u0004Unrecognized Data": [
  null,
  "認識されないデータ"
 ],
 "storage-id-desc\u0004VDO Backing": [
  null,
  ""
 ],
 "storage\u0004Drive": [
  null,
  "ドライブ"
 ],
 "storage\u0004Hard Disk": [
  null,
  "ハードディスク"
 ],
 "storage\u0004Optical Drive": [
  null,
  "光学ドライブ"
 ],
 "storage\u0004Removable Drive": [
  null,
  "リムーバブルドライブ"
 ],
 "storage\u0004Solid-State Disk": [
  null,
  "ソリッドステートディスク"
 ],
 "format-bytes\u0004bytes": [
  null,
  "バイト"
 ]
}));
