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
  "language": "de",
  "x-generator": "Zanata 3.9.6"
 },
 "$0 Block Device": [
  null,
  "$0 blockorientiertes Gerät"
 ],
 "$0 Chunk Size": [
  null,
  "$0 Chunk Size"
 ],
 "$0 Disks": [
  null,
  "$0 Datenträger"
 ],
 "$0 data + $1 overhead used of $2 ($3)": [
  null,
  ""
 ],
 "$0 day": [
  "$0 days",
  "$0 Tag",
  "$0 Tage"
 ],
 "$0 disk is missing": [
  "$0 disks are missing",
  "$0 Festplatte fehlt",
  "$0 Festplatten fehlen"
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
  "$0 Stunde",
  "$0 Stunden"
 ],
 "$0 is in active use": [
  null,
  ""
 ],
 "$0 minute": [
  "$0 minutes",
  "$0 Minute",
  "$0 Minuten"
 ],
 "$0 month": [
  "$0 months",
  "$0 Monat",
  "$0 Monate"
 ],
 "$0 of $1": [
  null,
  "$0 von $01"
 ],
 "$0 used of $1 ($2 saved)": [
  null,
  ""
 ],
 "$0 week": [
  "$0 weeks",
  "$0 Woche",
  "$0 Wochen"
 ],
 "$0 year": [
  "$0 years",
  "$0 Jahr",
  "$0 Jahre"
 ],
 "$0, $1 free": [
  null,
  ""
 ],
 "$name (from $host)": [
  null,
  "$name (von $host)"
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
  "1 MiB"
 ],
 "1 day": [
  null,
  "1 Tag"
 ],
 "1 hour": [
  null,
  "1 Stunde"
 ],
 "1 week": [
  null,
  "1 Woche"
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
  "5 Minuten"
 ],
 "512 KiB": [
  null,
  "512 KiB"
 ],
 "6 hours": [
  null,
  "6 Stunden"
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
  ""
 ],
 "Activate": [
  null,
  "Aktivieren"
 ],
 "Activating $target": [
  null,
  "Aktiviere $target"
 ],
 "Add": [
  null,
  "Hinzufügen"
 ],
 "Add Disks": [
  null,
  "Datenträger hinzufügen"
 ],
 "Add iSCSI Portal": [
  null,
  ""
 ],
 "Adding physical volume to $target": [
  null,
  "Füge physikalischen Datenträger zu $target hinzu"
 ],
 "Address": [
  null,
  "Adresse"
 ],
 "Apply": [
  null,
  "Anwenden"
 ],
 "At least $0 disks are needed.": [
  null,
  "Mindestens $0 Datenträger sind nötig."
 ],
 "At least one disk is needed.": [
  null,
  "Mindestens ein Datenträger ist nötig."
 ],
 "Authentication required": [
  null,
  "Authentifikation erforderlich"
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
  "Gesperrt"
 ],
 "Can't delete while unlocked": [
  null,
  ""
 ],
 "Cancel": [
  null,
  "Abbrechen"
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
  "Erzeuge RAID-Gerät $target"
 ],
 "Checking and Repairing RAID Device $target": [
  null,
  "Überprüfe und repariere RAID-Gerät $target"
 ],
 "Chunk Size": [
  null,
  "Happengröße"
 ],
 "Cleaning up for $target": [
  null,
  "$target wird aufgeräumt"
 ],
 "Close": [
  null,
  "Schließen"
 ],
 "Compatible with all systems and devices (MBR)": [
  null,
  "Kompatibel mit allen Systemen und Geräten (MBR)"
 ],
 "Compatible with modern system and hard disks > 2TB (GPT)": [
  null,
  "Kompatibel mit modernen Systemen und Festplatten > 2TB (GPT)"
 ],
 "Compression": [
  null,
  "Komprimierung"
 ],
 "Confirm passphrase": [
  null,
  "Passphrase wiederholen"
 ],
 "Content": [
  null,
  "Inhalt"
 ],
 "Create": [
  null,
  "Erstellen"
 ],
 "Create Logical Volume": [
  null,
  "Logischen Datenträger erstellen"
 ],
 "Create Partition": [
  null,
  "Partition erzeugen"
 ],
 "Create RAID Device": [
  null,
  "RAID-Gerät erzeugen"
 ],
 "Create Snapshot": [
  null,
  "Snapshot erzeugen"
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
  "Datenträgerverbund erstellen"
 ],
 "Create new Logical Volume": [
  null,
  "Logischen Datenträger erstellen"
 ],
 "Create partition": [
  null,
  "Partition erzeugen"
 ],
 "Create partition on $0": [
  null,
  "Partition auf $0 erzeugen"
 ],
 "Create partition table": [
  null,
  "Partitionstabelle erzeugen"
 ],
 "Creating RAID Device $target": [
  null,
  "Erzeuge RAID-Gerät $target"
 ],
 "Creating filesystem on $target": [
  null,
  "Dateisystem auf $0 wird erzeugt"
 ],
 "Creating logical volume $target": [
  null,
  "Erzeuge logischen Datenträger $target"
 ],
 "Creating partition $target": [
  null,
  "Erzeuge Partition $target"
 ],
 "Creating snapshot of $target": [
  null,
  "Erzeuge Snapshot von $target"
 ],
 "Creating volume group $target": [
  null,
  "Erzeuge Datenträgerverbund $target"
 ],
 "Custom": [
  null,
  "Benutzerdefiniert"
 ],
 "Custom (Enter filesystem type)": [
  null,
  "Benutzerdefiniert (Geben Sie den Dateisystemtyp an)"
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
  "Datenträger ist FEHLERHAFT"
 ],
 "Data Used": [
  null,
  ""
 ],
 "Deactivate": [
  null,
  "Deaktivieren"
 ],
 "Deactivating $target": [
  null,
  "Deaktiviere $target"
 ],
 "Deduplication": [
  null,
  ""
 ],
 "Default": [
  null,
  "Standard"
 ],
 "Delete": [
  null,
  "Löschen"
 ],
 "Deleting $target": [
  null,
  "Lösche $target"
 ],
 "Deleting a RAID device will erase all data on it.": [
  null,
  "Das Löschen eines RAID-Gerätes löscht alle darauf vorhandenen Daten."
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
  "Das Löschen eines Datenträgerverbunds löscht alle sich darin befindenden Daten."
 ],
 "Deleting volume group $target": [
  null,
  "Lösche Datenträgerverbund ätarget"
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
  ""
 ],
 "Disk is OK": [
  null,
  "Datenträger ist OK"
 ],
 "Disks": [
  null,
  "Datenträger"
 ],
 "Don't overwrite existing data": [
  null,
  "Vorhandene Daten nicht überschreiben"
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
  "Leere $target"
 ],
 "Encrypted $0": [
  null,
  ""
 ],
 "Encrypted EXT4 (LUKS)": [
  null,
  "Verschlüsseltes EXT4 (LUKS)"
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
  "Verschlüsseltes XFS (LUKS)"
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
  "Verschlüsselungsoptionen"
 ],
 "Erase": [
  null,
  "Säubern"
 ],
 "Erasing $target": [
  null,
  "$target wird gelöscht"
 ],
 "Error": [
  null,
  "Fehler"
 ],
 "Extended Partition": [
  null,
  "Erweiterte Partition"
 ],
 "FAILED": [
  null,
  "KAPUTT"
 ],
 "Filesystem": [
  null,
  "Dateisystem"
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
  "Dateisystemtyp"
 ],
 "Filesystems": [
  null,
  ""
 ],
 "Format": [
  null,
  "Formatieren"
 ],
 "Format $0": [
  null,
  "$0 formatieren"
 ],
 "Format Disk $0": [
  null,
  "Datenträger $0 formatieren"
 ],
 "Formatting a disk will erase all data on it.": [
  null,
  "Das Formatieren eines Datenträgers löscht alle darauf vorhandenen Daten."
 ],
 "Formatting a storage device will erase all data on it.": [
  null,
  "Das Formatieren eines Speichergeräts löscht alle darauf vorhandenen Daten."
 ],
 "Free": [
  null,
  "Verfügbar"
 ],
 "Free Space": [
  null,
  ""
 ],
 "Go to now": [
  null,
  "Zu 'Jetzt' gehen"
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
  "Synchron"
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
  "Schließen"
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
  "Logischer Datenträger"
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
  "Markiere $target als fehlerhaft"
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
  "Einhängen"
 ],
 "Mount Options": [
  null,
  "Einhängoptionen"
 ],
 "Mount Point": [
  null,
  "Einhängestelle"
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
  "Einhängen"
 ],
 "Mounting $target": [
  null,
  "$target wird eingehängt"
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
  "NTFS - Kompatibel mit den meisten Systemen"
 ],
 "Name": [
  null,
  "Name"
 ],
 "Name can not be empty.": [
  null,
  "Name darf nicht leer sein."
 ],
 "Name cannot be empty.": [
  null,
  "Name darf nicht leer sein."
 ],
 "Name cannot be longer than 127 characters.": [
  null,
  "Der Name darf nicht mehr als 127 Zeichen enthalten."
 ],
 "Name cannot contain the character '$0'.": [
  null,
  "Der Name darf nicht das Zeichen '$0' enthalten."
 ],
 "Name cannot contain whitespace.": [
  null,
  "Der Name darf keine Leerzeichen enthalten."
 ],
 "New NFS Mount": [
  null,
  ""
 ],
 "Next": [
  null,
  "Weiter"
 ],
 "No Filesystem": [
  null,
  "Kein Dateisystem"
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
  "Keine Partitionierung"
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
  "Keine Datenträgerverbünde erzeugt"
 ],
 "Not found": [
  null,
  "Nicht gefunden"
 ],
 "Not mounted": [
  null,
  ""
 ],
 "Not running": [
  null,
  "Läuft nicht"
 ],
 "Off": [
  null,
  "Aus"
 ],
 "On": [
  null,
  "Ein"
 ],
 "Only $0 of $1 are used.": [
  null,
  ""
 ],
 "Operation '$operation' on $target": [
  null,
  "Operation '$operation' auf $target"
 ],
 "Options": [
  null,
  "Einstellungen"
 ],
 "Other Devices": [
  null,
  "Andere Geräte"
 ],
 "Overwrite existing data with zeros": [
  null,
  "Vorhandene Daten mit Nullen überschreiben"
 ],
 "Partition": [
  null,
  "Partition"
 ],
 "Partition of $0": [
  null,
  ""
 ],
 "Partitioning": [
  null,
  "Partitionierung"
 ],
 "Passphrase": [
  null,
  "Passwort"
 ],
 "Passphrase cannot be empty": [
  null,
  "Passphrase darf nicht leer sein"
 ],
 "Passphrases do not match": [
  null,
  "Passphrasen stimmen nicht überein."
 ],
 "Password": [
  null,
  "Passwort"
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
  "Bitte bestätigen Sie das Löschen von $0"
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
  "Pool für Thin Logical Volumes"
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
  ""
 ],
 "Purpose": [
  null,
  ""
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
  "RAID 0 (Gestreift)"
 ],
 "RAID 1": [
  null,
  "RAID 1"
 ],
 "RAID 1 (Mirror)": [
  null,
  "RAID 1 (Gespiegelt)"
 ],
 "RAID 10": [
  null,
  "RAID 10"
 ],
 "RAID 10 (Stripe of Mirrors)": [
  null,
  "RID 10 (Gestreifte Spiegel)"
 ],
 "RAID 4": [
  null,
  "RAID 4"
 ],
 "RAID 4 (Dedicated Parity)": [
  null,
  "RAID 4 (Dedizierte Parität)"
 ],
 "RAID 5": [
  null,
  "RAID 5"
 ],
 "RAID 5 (Distributed Parity)": [
  null,
  "RAID 5 (Verteilte Parität)"
 ],
 "RAID 6": [
  null,
  "RAID 6"
 ],
 "RAID 6 (Double Distributed Parity)": [
  null,
  "RAID 6 (Doppelt Verteilte Parität)"
 ],
 "RAID Device": [
  null,
  ""
 ],
 "RAID Device $0": [
  null,
  "RAID-Gerät $0"
 ],
 "RAID Devices": [
  null,
  ""
 ],
 "RAID Level": [
  null,
  "RAID Ebene"
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
  "Neustart"
 ],
 "Recovering": [
  null,
  "Am Erholen"
 ],
 "Recovering RAID Device $target": [
  null,
  "Stoppe RAID-Gerät $target"
 ],
 "Remove device": [
  null,
  ""
 ],
 "Removing $target from RAID Device": [
  null,
  "Entferne $target vom RAID-Gerät"
 ],
 "Removing physical volume from $target": [
  null,
  "Entferne physikalischen Datenträger von $target"
 ],
 "Rename": [
  null,
  "Umbenennen"
 ],
 "Rename Logical Volume": [
  null,
  "Logischen Datenträger umbenennen"
 ],
 "Rename Volume Group": [
  null,
  "Datenträgerverbund umbennen"
 ],
 "Renaming $target": [
  null,
  "$target wird umbenannt"
 ],
 "Repairing $target": [
  null,
  ""
 ],
 "Resizing $target": [
  null,
  "Größenänderung von $target"
 ],
 "Running": [
  null,
  "Läuft"
 ],
 "SMART self-test of $target": [
  null,
  "SMART-Selbsttest von $target"
 ],
 "Securely erasing $target": [
  null,
  "$target wird sicher gelöscht"
 ],
 "Server": [
  null,
  "Server"
 ],
 "Server Address": [
  null,
  "Serveradresse"
 ],
 "Server address cannot be empty.": [
  null,
  "Serveradresse darf nicht leer sein."
 ],
 "Server cannot be empty.": [
  null,
  ""
 ],
 "Setting up loop device $target": [
  null,
  "Richte Loop Device $target ein"
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
  "Größe"
 ],
 "Size cannot be negative": [
  null,
  "Größe darf nicht negativ sein"
 ],
 "Size cannot be zero": [
  null,
  "Größe darf nicht Null sein"
 ],
 "Size is too large": [
  null,
  "Größe zu groß"
 ],
 "Size must be a number": [
  null,
  "Größe muss eine Zahl sein"
 ],
 "Size must be at least $0": [
  null,
  ""
 ],
 "Spare": [
  null,
  "Ersatz"
 ],
 "Start": [
  null,
  "Starten"
 ],
 "Start Multipath": [
  null,
  "Multipath starten"
 ],
 "Start Scrubbing": [
  null,
  "Schrubben Starten"
 ],
 "Starting RAID Device $target": [
  null,
  "Starte RAID-Gerät $target"
 ],
 "Starting swapspace $target": [
  null,
  ""
 ],
 "Stop": [
  null,
  "Stoppen"
 ],
 "Stop Device": [
  null,
  ""
 ],
 "Stop Scrubbing": [
  null,
  "Schrubben Stoppen"
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
  "Stoppe RAID-Gerät $target"
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
  "Passphrase speichern"
 ],
 "Stored Passphrase": [
  null,
  "Gespeichertes Passwort"
 ],
 "Stored passphrase": [
  null,
  "Gespeichertes Passwort"
 ],
 "Swap": [
  null,
  "Auslagerungsspeicher "
 ],
 "Synchronizing RAID Device $target": [
  null,
  "Synchronisiere RAID-Gerät $target"
 ],
 "Targets": [
  null,
  "Ziele"
 ],
 "The \"storaged\" API is not available on this system.": [
  null,
  "Die \"storaged\" API ist auf diesem System nicht verfügbar."
 ],
 "The RAID Array is in a degraded state": [
  null,
  "Das RAID-Array befindet sich in einem degradierten Zustand"
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
  "Der letzte physische Datenträger einer Datenträgergruppe kann nicht entfernt werden."
 ],
 "The user <b>$0</b> is not permitted to manage storage": [
  null,
  "Der Benutzer <b>$0</b> hat keine Rechte, Speicher zu verwalten."
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
  "UUID"
 ],
 "Unable to reach server": [
  null,
  "Kann Server nicht erreichen"
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
  "Unbekannt"
 ],
 "Unknown ($0)": [
  null,
  "Unbekannt ($0)"
 ],
 "Unknown host name": [
  null,
  "Unbekannter Host-Name"
 ],
 "Unlock": [
  null,
  "Öffnen"
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
  "Aushängen"
 ],
 "Unmounting $target": [
  null,
  "$target wird ausgehängt"
 ],
 "Unrecognized Data": [
  null,
  "Unerkannte Daten"
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
  "Benutzt"
 ],
 "Username": [
  null,
  "Benutzername"
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
  "VFAT - Kompatibel mit allen System und Geräten"
 ],
 "Very securely erasing $target": [
  null,
  "$target wird sehr sicher gelöscht"
 ],
 "Volume": [
  null,
  ""
 ],
 "Volume Group": [
  null,
  "Datenträgerverbund"
 ],
 "Volume Group $0": [
  null,
  "Datenträgerverbund $0"
 ],
 "Volume Groups": [
  null,
  "Datenträgerverbünde"
 ],
 "Write-mostly": [
  null,
  "Hauptsächlich Schreiben"
 ],
 "Writing": [
  null,
  ""
 ],
 "XFS - Red Hat Enterprise Linux 7 default": [
  null,
  "XFS - Red Hat Enterprise Linux 7 default"
 ],
 "[$0 bytes of binary data]": [
  null,
  "[$0 bytes Binäredaten]"
 ],
 "[binary data]": [
  null,
  "[Binärdaten]"
 ],
 "[no data]": [
  null,
  "[keine Daten]"
 ],
 "ext4 - Red Hat Enterprise Linux 6 default": [
  null,
  "ext4 - Red Hat Enterprise Linux 6 default"
 ],
 "iSCSI Targets": [
  null,
  "iSCSI Targets"
 ],
 "unknown target": [
  null,
  "Unbekanntes Ziel"
 ],
 "unpartitioned space on $0": [
  null,
  ""
 ],
 "storage-id-desc\u0004$0 File System": [
  null,
  "$0 Dateisystem"
 ],
 "storage-id-desc\u0004Encrypted data": [
  null,
  ""
 ],
 "storage-id-desc\u0004Other Data": [
  null,
  "Andere Daten"
 ],
 "storage-id-desc\u0004Swap Space": [
  null,
  "Auslagerungsspeicher"
 ],
 "storage-id-desc\u0004Unrecognized Data": [
  null,
  "Unerkannte Daten"
 ],
 "storage-id-desc\u0004VDO Backing": [
  null,
  ""
 ],
 "storage\u0004Drive": [
  null,
  "Speichergerät"
 ],
 "storage\u0004Hard Disk": [
  null,
  "Festplatte"
 ],
 "storage\u0004Optical Drive": [
  null,
  "Optisches Speichergerät"
 ],
 "storage\u0004Removable Drive": [
  null,
  "Entfernbares Speichergerät"
 ],
 "storage\u0004Solid-State Disk": [
  null,
  "Solid-State Datenträger"
 ],
 "format-bytes\u0004bytes": [
  null,
  "Bytes"
 ]
}));
