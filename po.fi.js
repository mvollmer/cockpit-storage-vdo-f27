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
  "language": "fi",
  "x-generator": "Zanata 3.9.6"
 },
 "$0 Block Device": [
  null,
  "$0 Lohkolaite"
 ],
 "$0 Chunk Size": [
  null,
  ""
 ],
 "$0 Disks": [
  null,
  "$0 levyt"
 ],
 "$0 data + $1 overhead used of $2 ($3)": [
  null,
  ""
 ],
 "$0 day": [
  "$0 days",
  "$0 päivä",
  "$0 päivää"
 ],
 "$0 disk is missing": [
  "$0 disks are missing",
  "$0 levyä ei löydy",
  "$0 levyjä ei löydy"
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
  "$0 tunti",
  "$0 tuntia"
 ],
 "$0 is in active use": [
  null,
  "$0 on aktiivisessa käytössä"
 ],
 "$0 minute": [
  "$0 minutes",
  "$0 minuutti",
  "$0 minuuttia"
 ],
 "$0 month": [
  "$0 months",
  "$0 kuukausi",
  "$0 kuukautta"
 ],
 "$0 of $1": [
  null,
  "$0/$1"
 ],
 "$0 used of $1 ($2 saved)": [
  null,
  "$0 käytetty kohteesta $1 ($2 tallennettu)"
 ],
 "$0 week": [
  "$0 weeks",
  "$0 viikko",
  "$0 viikkoa"
 ],
 "$0 year": [
  "$0 years",
  "$0 vuosi",
  "$0 vuotta"
 ],
 "$0, $1 free": [
  null,
  "$0, $1 vapaana"
 ],
 "$name (from $host)": [
  null,
  "$name (kohteesta $host)"
 ],
 "${size} ${desc}": [
  null,
  "${size} ${desc}"
 ],
 "(default)": [
  null,
  "(oletus)"
 ],
 "(none)": [
  null,
  "(ei mitään)"
 ],
 "1 MiB": [
  null,
  "1 MiB"
 ],
 "1 day": [
  null,
  "1 päivä"
 ],
 "1 hour": [
  null,
  "1 tunti"
 ],
 "1 week": [
  null,
  "1 viikko"
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
  "5 minuuttia"
 ],
 "512 KiB": [
  null,
  "512 KiB"
 ],
 "6 hours": [
  null,
  "6 tuntia"
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
  "Levy vaaditaan."
 ],
 "A spare disk needs to be added first before this disk can be removed.": [
  null,
  "Varalevy pitää lisätä ennen kuin tämä levy voidaan poistaa."
 ],
 "Activate": [
  null,
  "Aktivoi"
 ],
 "Activating $target": [
  null,
  "Aktivoidaan $target"
 ],
 "Add": [
  null,
  "Lisää"
 ],
 "Add Disks": [
  null,
  "Lisää Levyjä"
 ],
 "Add iSCSI Portal": [
  null,
  "Lisää iSCSI Portaali"
 ],
 "Adding physical volume to $target": [
  null,
  "Lisätään fyysinen taltio kohteeseen $target"
 ],
 "Address": [
  null,
  "Osoite"
 ],
 "Apply": [
  null,
  "Toteuta"
 ],
 "At least $0 disks are needed.": [
  null,
  "Vähintään $0 levyä tarvitaan."
 ],
 "At least one disk is needed.": [
  null,
  "Vähintään yksi levy tarvitaan."
 ],
 "Authentication required": [
  null,
  "Tunnistautuminen vaaditaan"
 ],
 "Available targets on $0": [
  null,
  "Käytettävät kohteet $0"
 ],
 "Backing Device": [
  null,
  ""
 ],
 "Block": [
  null,
  "Lohko"
 ],
 "Block device for filesystems": [
  null,
  "Lohkolaite tiedostojärjestelmille"
 ],
 "Blocked": [
  null,
  "Estetty"
 ],
 "Can't delete while unlocked": [
  null,
  ""
 ],
 "Cancel": [
  null,
  "Peru"
 ],
 "Change": [
  null,
  "Vaihda"
 ],
 "Change iSCSI Initiator Name": [
  null,
  "Vaihda iSCSI-Asiakaslaitteen Nimi"
 ],
 "Checking $target": [
  null,
  ""
 ],
 "Checking RAID Device $target": [
  null,
  "Tarkistetaan RAID-Laite $target"
 ],
 "Checking and Repairing RAID Device $target": [
  null,
  "Tarkistetaan ja Korjataan RAID-Laite $target"
 ],
 "Chunk Size": [
  null,
  ""
 ],
 "Cleaning up for $target": [
  null,
  "Siivotaan kohteelle $target"
 ],
 "Close": [
  null,
  "Sulje"
 ],
 "Compatible with all systems and devices (MBR)": [
  null,
  "Yhteensopiva kaikkien järjestelmien ja laitteiden kanssa (MBR)"
 ],
 "Compatible with modern system and hard disks > 2TB (GPT)": [
  null,
  "Yhteensopiva modernien järjestelmien ja kovalevyjen kanssa > 2TB (GPT)"
 ],
 "Compression": [
  null,
  "Pakkaus"
 ],
 "Confirm passphrase": [
  null,
  "Vahvista salasana"
 ],
 "Content": [
  null,
  "Sisältö"
 ],
 "Create": [
  null,
  "Luo"
 ],
 "Create Logical Volume": [
  null,
  "Luo Looginen Taltio"
 ],
 "Create Partition": [
  null,
  "Luo Osio"
 ],
 "Create RAID Device": [
  null,
  "Luo RAID-Laite"
 ],
 "Create Snapshot": [
  null,
  "Luo Tilannevedos"
 ],
 "Create Thin Volume": [
  null,
  "Luo Thin-Taltio"
 ],
 "Create VDO Device": [
  null,
  ""
 ],
 "Create Volume Group": [
  null,
  "Luo Taltioryhmä"
 ],
 "Create new Logical Volume": [
  null,
  "Luo uusi Looginen Taltio"
 ],
 "Create partition": [
  null,
  "Luo osio"
 ],
 "Create partition on $0": [
  null,
  "Luo osio kohteessa $0"
 ],
 "Create partition table": [
  null,
  "Luo osiotaulu"
 ],
 "Creating RAID Device $target": [
  null,
  "Luodaan RAID-Laite $target"
 ],
 "Creating filesystem on $target": [
  null,
  "Luodaan tiedostojärjestelmää kohteessa $target"
 ],
 "Creating logical volume $target": [
  null,
  "Luodan loogista taltiota $target"
 ],
 "Creating partition $target": [
  null,
  "Luodaan osiota $target"
 ],
 "Creating snapshot of $target": [
  null,
  "Luodaan tilannevedos kohteesta $target"
 ],
 "Creating volume group $target": [
  null,
  "Luodaan taltioryhmä $target"
 ],
 "Custom": [
  null,
  "Mukautettu"
 ],
 "Custom (Enter filesystem type)": [
  null,
  "Mukautettu (Lisää tiedostojärjestelmän tyyppi)"
 ],
 "Custom encryption options": [
  null,
  "Mukautetut salausvalinnat"
 ],
 "Custom mount option": [
  null,
  ""
 ],
 "Custom mount options": [
  null,
  "Mukautetut liitosvalinnat"
 ],
 "DISK IS FAILING": [
  null,
  "LEVY ON PETTÄMÄSSÄ"
 ],
 "Data Used": [
  null,
  "Dataa Käytetty"
 ],
 "Deactivate": [
  null,
  "Deaktivoi"
 ],
 "Deactivating $target": [
  null,
  "Deaktivoidaan $target"
 ],
 "Deduplication": [
  null,
  ""
 ],
 "Default": [
  null,
  "Oletus"
 ],
 "Delete": [
  null,
  "Poista"
 ],
 "Deleting $target": [
  null,
  "Poistetaan $target"
 ],
 "Deleting a RAID device will erase all data on it.": [
  null,
  "RAID-laitteen poistaminen tuhoaa kaiken sillä olevan datan."
 ],
 "Deleting a VDO device will erase all data on it.": [
  null,
  ""
 ],
 "Deleting a logical volume will delete all data in it.": [
  null,
  "Loogisen taltion poistaminen tuhoaa kaiken sillä olevan datan."
 ],
 "Deleting a partition will delete all data in it.": [
  null,
  "Osion poistaminen tuhoaa kaiken sillä olevan datan."
 ],
 "Deleting a volume group will erase all data on it.": [
  null,
  "Taltion poistaminen tuhoaa kaiken sillä olevan datan."
 ],
 "Deleting volume group $target": [
  null,
  "Tuhotaan taltioryhmä $target"
 ],
 "Device File": [
  null,
  ""
 ],
 "Device is read-only": [
  null,
  "Laite on \"vain luku\"-muotoa"
 ],
 "Disk": [
  null,
  "Levy"
 ],
 "Disk is OK": [
  null,
  "Levy on OK"
 ],
 "Disks": [
  null,
  "Levyt"
 ],
 "Don't overwrite existing data": [
  null,
  "Älä ylikirjoita olemassaolevaa dataa"
 ],
 "Drive": [
  null,
  "Levy"
 ],
 "Drives": [
  null,
  "Levyt"
 ],
 "Edit": [
  null,
  "Muokkaa"
 ],
 "Ejecting $target": [
  null,
  "Ejektoidaan $target"
 ],
 "Emptying $target": [
  null,
  "Tyhjennetään $target"
 ],
 "Encrypted $0": [
  null,
  "Salattu $0"
 ],
 "Encrypted EXT4 (LUKS)": [
  null,
  "Salattu EXT4 (LUKS)"
 ],
 "Encrypted Logical Volume of $0": [
  null,
  "Salattu Looginen Taltio $0"
 ],
 "Encrypted Partition of $0": [
  null,
  "Salattu Osio $0"
 ],
 "Encrypted XFS (LUKS)": [
  null,
  "Salattu XFS (LUKS)"
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
  "Salaus"
 ],
 "Encryption Options": [
  null,
  "Salauksen Valinnat"
 ],
 "Erase": [
  null,
  "Tyhjennä"
 ],
 "Erasing $target": [
  null,
  "Tyhjennetään $target"
 ],
 "Error": [
  null,
  "Virhe"
 ],
 "Extended Partition": [
  null,
  "Laajennettu Osio"
 ],
 "FAILED": [
  null,
  "EPÄONNISTUI"
 ],
 "Filesystem": [
  null,
  "Tiedostojärjestelmä"
 ],
 "Filesystem Mounting": [
  null,
  "Tiedostojärjestelmän Liittäminen"
 ],
 "Filesystem Name": [
  null,
  "Tiedostojärjestelmän Nimi"
 ],
 "Filesystem type": [
  null,
  "Tiedostojärjestelmän tyyppi"
 ],
 "Filesystems": [
  null,
  "Tiedostojärjestelmät"
 ],
 "Format": [
  null,
  "Alusta"
 ],
 "Format $0": [
  null,
  "Alusta $0"
 ],
 "Format Disk $0": [
  null,
  "Alusta Levy $0"
 ],
 "Formatting a disk will erase all data on it.": [
  null,
  "Taltion alustaminen tuhoaa kaiken sillä olevan datan."
 ],
 "Formatting a storage device will erase all data on it.": [
  null,
  "Levylaitteen alustaminen tuhoaa kaiken sillä olevan datan."
 ],
 "Free": [
  null,
  "Vapaa"
 ],
 "Free Space": [
  null,
  "Vapaa Tila"
 ],
 "Go to now": [
  null,
  "Mene nyt"
 ],
 "Grow": [
  null,
  "Kasvata"
 ],
 "Grow Logical Volume": [
  null,
  ""
 ],
 "Grow logical size of $0": [
  null,
  "Kasvata loogista kokoa $0"
 ],
 "Grow to take all space": [
  null,
  ""
 ],
 "In Sync": [
  null,
  "Synkronoitu"
 ],
 "Inactive volume": [
  null,
  "Epäaktiivinen taltio"
 ],
 "Index Memory": [
  null,
  ""
 ],
 "Invalid username or password": [
  null,
  "Virheellinen käyttäjätunnus tai salasana"
 ],
 "Jobs": [
  null,
  "Työt"
 ],
 "Local Mount Point": [
  null,
  "Paikallinen liitospiste"
 ],
 "Lock": [
  null,
  "Lukitse"
 ],
 "Locking $target": [
  null,
  "Lukitaan $target"
 ],
 "Logical": [
  null,
  "Looginen"
 ],
 "Logical Size": [
  null,
  "Looginen Koko"
 ],
 "Logical Volume": [
  null,
  "Looginen taltio"
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
  "Merkitään $target virheelliseksi"
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
  "Muokataan $target"
 ],
 "Mount": [
  null,
  ""
 ],
 "Mount Options": [
  null,
  "Liitosvalinnat"
 ],
 "Mount Point": [
  null,
  "Liitospiste"
 ],
 "Mount at boot": [
  null,
  "Liitä käynnistyksen yhteydessä"
 ],
 "Mount options": [
  null,
  "Liitosvalinnat"
 ],
 "Mount point can not be empty": [
  null,
  "Liitospiste ei voi olla tyhjä"
 ],
 "Mount point cannot be empty.": [
  null,
  "Liitospiste ei voi olla tyhjä."
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
  "Liitetään $target"
 ],
 "NFS Mount": [
  null,
  "NFS-liitos"
 ],
 "NFS Mounts": [
  null,
  "NFS-liitokset"
 ],
 "NTFS - Compatible with most systems": [
  null,
  "NTFS - Yhteensopiva useimpien järjestelmien kanssa"
 ],
 "Name": [
  null,
  "Nimi"
 ],
 "Name can not be empty.": [
  null,
  ""
 ],
 "Name cannot be empty.": [
  null,
  "Nimi ei voi olla tyhjä."
 ],
 "Name cannot be longer than 127 characters.": [
  null,
  "Nimi voi sisältää enintään 127 merkkiä."
 ],
 "Name cannot contain the character '$0'.": [
  null,
  "Nimi ei voi sisältää merkkiä '$0'."
 ],
 "Name cannot contain whitespace.": [
  null,
  ""
 ],
 "New NFS Mount": [
  null,
  "Uusi NFS-liitos"
 ],
 "Next": [
  null,
  "Seuraava"
 ],
 "No Filesystem": [
  null,
  "Ei tiedostojärjestelmää"
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
  "Ei vapaata tilaa"
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
  "Ei osiointia"
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
  "Ei löytynyt"
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
  "Valinnat"
 ],
 "Other Devices": [
  null,
  "Muut laitteet"
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
  "Osiointi"
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
  "Salasana"
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
  ""
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
  "Portti"
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
  ""
 ],
 "RAID 1": [
  null,
  "RAID 1"
 ],
 "RAID 1 (Mirror)": [
  null,
  ""
 ],
 "RAID 10": [
  null,
  "RAID 10"
 ],
 "RAID 10 (Stripe of Mirrors)": [
  null,
  ""
 ],
 "RAID 4": [
  null,
  "RAID 4"
 ],
 "RAID 4 (Dedicated Parity)": [
  null,
  ""
 ],
 "RAID 5": [
  null,
  "RAID 5"
 ],
 "RAID 5 (Distributed Parity)": [
  null,
  ""
 ],
 "RAID 6": [
  null,
  "RAID 6"
 ],
 "RAID 6 (Double Distributed Parity)": [
  null,
  ""
 ],
 "RAID Device": [
  null,
  "RAID-laite"
 ],
 "RAID Device $0": [
  null,
  "RAID-laite $0"
 ],
 "RAID Devices": [
  null,
  "RAID-laitteet"
 ],
 "RAID Level": [
  null,
  "RAID-taso"
 ],
 "RAID Member": [
  null,
  "RAID-jäsen"
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
  "Nimeä uudelleen"
 ],
 "Rename Logical Volume": [
  null,
  ""
 ],
 "Rename Volume Group": [
  null,
  "Nimeä uudelleen taltioryhmä"
 ],
 "Renaming $target": [
  null,
  "Nimetään uudelleen $target"
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
  ""
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
  "Palvelin"
 ],
 "Server Address": [
  null,
  "Palvelimen  osoite"
 ],
 "Server address cannot be empty.": [
  null,
  "Palvelimen osoite ei voi olla tyhjä."
 ],
 "Server cannot be empty.": [
  null,
  "Palvelin ei voi olla tyhjä."
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
  "Koko"
 ],
 "Size cannot be negative": [
  null,
  "Koko ei  voi olla negatiivinen"
 ],
 "Size cannot be zero": [
  null,
  "Koko ei voi olla nolla"
 ],
 "Size is too large": [
  null,
  "Koko on liian suuri"
 ],
 "Size must be a number": [
  null,
  "Koon tulee olla numero"
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
  "Käynnistä"
 ],
 "Start Multipath": [
  null,
  "Käynnistä Multipath"
 ],
 "Start Scrubbing": [
  null,
  ""
 ],
 "Starting RAID Device $target": [
  null,
  "Käynnistetään RAID-laite $target"
 ],
 "Starting swapspace $target": [
  null,
  ""
 ],
 "Stop": [
  null,
  "Pysäytä"
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
  "Pysäytä ja poista"
 ],
 "Stop and unmount": [
  null,
  ""
 ],
 "Stopping RAID Device $target": [
  null,
  "Pysäytetään RAID-laite $target"
 ],
 "Stopping swapspace $target": [
  null,
  ""
 ],
 "Storage": [
  null,
  "Tallennustila"
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
 "Synchronizing RAID Device $target": [
  null,
  "Synkronoidaan RAID-laitetta $target"
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
  "Tyyppi"
 ],
 "UUID": [
  null,
  "UUID"
 ],
 "Unable to reach server": [
  null,
  "Serveriin ei saada yhteyttä"
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
  "Tuntematon"
 ],
 "Unknown ($0)": [
  null,
  "Tuntematon ($0)"
 ],
 "Unknown host name": [
  null,
  ""
 ],
 "Unlock": [
  null,
  "Avaa"
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
  "Avataan $target"
 ],
 "Unmount": [
  null,
  "Irroita"
 ],
 "Unmounting $target": [
  null,
  "Irroitetaan $target"
 ],
 "Unrecognized Data": [
  null,
  "Tunnistamaton Data"
 ],
 "Unrecognized data can not be made smaller here.": [
  null,
  ""
 ],
 "Unsupported volume": [
  null,
  "Tukematon taltio"
 ],
 "Usage": [
  null,
  "Käyttö"
 ],
 "Use 512 Byte emulation": [
  null,
  ""
 ],
 "Used": [
  null,
  "Käytetty"
 ],
 "Username": [
  null,
  "Käyttäjätunnus"
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
  "VFAT - Yhteensopiva kaikkien järjestelmien ja laitteiden kanssa"
 ],
 "Very securely erasing $target": [
  null,
  "Poistetaan hyvin turvallisesti $target"
 ],
 "Volume": [
  null,
  "Taltio"
 ],
 "Volume Group": [
  null,
  "Taltioryhmä"
 ],
 "Volume Group $0": [
  null,
  "Taltioryhmä $0"
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
  "Kirjoitetaan"
 ],
 "XFS - Red Hat Enterprise Linux 7 default": [
  null,
  "XFS - Red Hat Enterprise Linux 7 default"
 ],
 "[$0 bytes of binary data]": [
  null,
  "[$0 tavua binääridatasta]"
 ],
 "[binary data]": [
  null,
  "[binääridata]"
 ],
 "[no data]": [
  null,
  "[ei dataa]"
 ],
 "ext4 - Red Hat Enterprise Linux 6 default": [
  null,
  "ext4 - Red Hat Enterprise Linux 6 default"
 ],
 "iSCSI Targets": [
  null,
  "iSCSI Kohteet"
 ],
 "unknown target": [
  null,
  "tuntematon kohde"
 ],
 "unpartitioned space on $0": [
  null,
  ""
 ],
 "storage-id-desc\u0004$0 File System": [
  null,
  "$0 tiedostojärjestelmä"
 ],
 "storage-id-desc\u0004Encrypted data": [
  null,
  "Salattu data"
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
  "Tunnistamaton Data"
 ],
 "storage-id-desc\u0004VDO Backing": [
  null,
  ""
 ],
 "storage\u0004Drive": [
  null,
  "Levy"
 ],
 "storage\u0004Hard Disk": [
  null,
  "Kovalevy"
 ],
 "storage\u0004Optical Drive": [
  null,
  "Optinen asema"
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
  "tavua"
 ]
}));
