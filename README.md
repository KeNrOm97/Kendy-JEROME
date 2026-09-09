<div align="center">

# Kendy JEROME

### Ingénieur Systèmes & Infrastructure
**Linux · FreeBSD · VoIP · Automatisation**

[![Localisation](https://img.shields.io/badge/Fort--de--France-Martinique_(972)-0A7B83?style=flat-square)](#)
[![Mobilité](https://img.shields.io/badge/Mobilit%C3%A9-Martinique_%C2%B7_M%C3%A9tropole_%C2%B7_T%C3%A9l%C3%A9travail-5B4B8A?style=flat-square)](#)
[![Statut](https://img.shields.io/badge/Statut-Ouvert_aux_opportunit%C3%A9s-2EA043?style=flat-square)](#)
[![CCNA](https://img.shields.io/badge/Certifi%C3%A9-Cisco_CCNA-1BA0D7?style=flat-square&logo=cisco&logoColor=white)](#)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Me_contacter-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/kendy-jerome-4b147234b)
[![Email](https://img.shields.io/badge/Email-kendyjerome20@gmail.com-EA4335?style=flat-square&logo=gmail&logoColor=white)](mailto:kendyjerome20@gmail.com)

**[Compétences](#ce-que-je-sais-faire) · [Projets](#projets) · [Méthode](#comment-je-travaille) · [Stack](#stack-technique) · [Parcours](#parcours) · [Contact](#me-contacter)**

</div>

---

> **Je construis des systèmes qui doivent tenir 24/7.**
> Infrastructures FreeBSD et Linux, téléphonie Asterisk, WebRTC chiffré, applications métier conteneurisées.
> De la maquette au service en production : je conçois, j'installe, j'automatise, je sécurise, je supervise.

---

## Ce que je sais faire

| Infrastructure & Systèmes | Communication & Temps réel | Exploitation & Sécurité |
|---|---|---|
| Serveurs FreeBSD, Linux, Windows Server en production | Architecture Asterisk : SVI, files d'attente, routage d'appel | Déploiement Infrastructure-as-Code avec Ansible et Shell |
| Virtualisation VMware, QEMU, VirtualBox, Docker | WebRTC navigateur avec chiffrement TLS/SRTP | Supervision Prometheus et Zabbix |
| Bases PostgreSQL, MySQL/MariaDB, Redis, Cassandra | Messagerie Apache James et XMPP Openfire | Réseau : VPN, DNS, VLAN, pare-feu PF et iptables |
| Frontaux Nginx, lighttpd, Tomcat sur OpenJDK | Annuaire AD/LDAP et administration des comptes | Support N2/N3 et procédures d'exploitation |

**Réseaux** : commutation, routage, VLAN, adressage — certifié Cisco CCNA.
**Applications métier** : développement de modules Odoo 18, conteneurisation Docker et Docker Compose.
**Documentation** : rédaction technique et procédures d'exploitation, pensées pour l'équipe qui reprend le service.

---

## Projets

### OpenWCC — Plateforme de centre de contacts open source

[![Repo](https://img.shields.io/badge/Code-OpenWCC-181717?style=flat-square&logo=github)](https://github.com/KeNrOm97/OpenWCC)
![FreeBSD](https://img.shields.io/badge/FreeBSD_14-AB2B28?style=flat-square&logo=freebsd&logoColor=white)
![Asterisk](https://img.shields.io/badge/Asterisk_18-F38020?style=flat-square&logo=asterisk&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL_15-4169E1?style=flat-square&logo=postgresql&logoColor=white)
![Ansible](https://img.shields.io/badge/Ansible-EE0000?style=flat-square&logo=ansible&logoColor=white)

Conception et déploiement d'une plateforme de centre de contacts open source sous **FreeBSD 14**, montée service par service : téléphonie **Asterisk 18**, messagerie **Apache James**, messagerie instantanée **Openfire**, annuaire **OpenLDAP**, base **PostgreSQL 15**, cache **Redis**, conteneur applicatif **Tomcat 10** sur **OpenJDK 11**, frontal **lighttpd**, le tout derrière un pare-feu **PF**.

L'installation et la configuration de chaque brique sont industrialisées par playbooks **Ansible** et scripts **Shell** : la plateforme se redéploie intégralement sans intervention manuelle.

```mermaid
flowchart LR
    SIP["Postes SIP"] --> PF
    WEB["Navigateur WebRTC"] --> PF
    CLI["Clients mail et XMPP"] --> PF
    PF["Pare-feu PF"] --> LIG["lighttpd<br/>frontal TLS"]
    PF --> AST["Asterisk 18<br/>SVI et files d'attente"]
    PF --> JAM["Apache James<br/>messagerie"]
    PF --> OFI["Openfire<br/>XMPP"]
    LIG --> TOM["Tomcat 10<br/>OpenJDK 11"]
    PG[("PostgreSQL 15")]
    RD[("Redis")]
    LDAP[("OpenLDAP")]
    AST --> PG
    AST --> RD
    AST --> LDAP
    TOM --> PG
    JAM --> LDAP
    OFI --> LDAP
    ANS["Ansible + scripts Shell"] -. déploiement .-> PF
    SUP["Prometheus et Zabbix"] -. supervision .-> PF
```

**Mon rôle sur la plateforme**

- Installation et configuration de l'ensemble des services, de l'OS au frontal web
- Automatisation des déploiements par Ansible et scripts Shell
- Administration des comptes utilisateurs et de l'annuaire AD/LDAP
- Services réseau : VPN, DNS, VLAN, règles de pare-feu
- Supervision des systèmes avec Prometheus et Zabbix
- Support de niveau 2 et 3, rédaction de la documentation technique et des procédures d'exploitation

`FreeBSD 14` · `Asterisk 18` · `PostgreSQL 15` · `Redis` · `OpenLDAP` · `Openfire` · `Apache James` · `Tomcat 10` · `OpenJDK 11` · `lighttpd` · `Python 3` · `PF` · `Ansible` · `Shell`

---

### Module Odoo 18 — Gestion des dossiers de subvention

![Odoo](https://img.shields.io/badge/Odoo_18-714B67?style=flat-square&logo=odoo&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-009639?style=flat-square&logo=nginx&logoColor=white)

**Le besoin.** Un dossier de subvention se monte à coups de tableurs et de pièces jointes éparpillées, sans trace fiable de qui a validé quoi ni de ce qui manque encore.

**La réponse.** Un module développé sur Odoo 18 qui fait du dossier un objet métier à part entière : un formulaire unique, des pièces justificatives rattachées, un circuit de validation explicite et un historique conservé. Le tout dans un environnement conteneurisé reproductible d'un poste à l'autre.

<table>
<tr><td width="50%" valign="top">

**Le module**

- Modèles de données déclarés via l'ORM Odoo
- Vues formulaire, liste et recherche en XML
- Circuit de validation par états
- Droits d'accès par groupe d'utilisateurs
- Documents justificatifs rattachés au dossier

</td><td width="50%" valign="top">

**L'environnement**

- Odoo 18 et PostgreSQL en services séparés
- Frontal Nginx en reverse proxy devant Odoo
- Orchestration par Docker Compose
- Addons montés en volume, rechargement à chaud
- Base persistée dans un volume nommé

</td></tr>
</table>

```mermaid
flowchart LR
    USER["Agent instructeur"] --> NGX
    subgraph DC["Docker Compose"]
        NGX["Nginx<br/>reverse proxy"]
        ODOO["Odoo 18<br/>module subvention"]
        DB[("PostgreSQL")]
    end
    NGX --> ODOO
    ODOO <--> DB
    VOL["Volume addons<br/>code du module"] -. monté à chaud .-> ODOO
```

Cycle de vie d'un dossier :

```mermaid
stateDiagram-v2
    state "Brouillon" as B
    state "Déposé" as D
    state "En instruction" as I
    state "Validé" as V
    state "Refusé" as R
    [*] --> B
    B --> D: pièces justificatives complètes
    D --> I: prise en charge
    I --> V: décision favorable
    I --> R: décision défavorable
    I --> B: complément demandé
    V --> [*]
    R --> [*]
```

`Odoo 18` · `Python` · `ORM Odoo` · `XML` · `Docker Compose` · `Nginx` · `PostgreSQL`

---

### SVI Python pour Asterisk

[![Repo](https://img.shields.io/badge/Code-Asterisk--svi--python--cassandra-181717?style=flat-square&logo=github)](https://github.com/KeNrOm97/Asterisk-svi-python-cassandra)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![Cassandra](https://img.shields.io/badge/Cassandra-1287B1?style=flat-square&logo=apache-cassandra&logoColor=white)

Serveur vocal interactif écrit en Python et branché sur Asterisk via AGI. Les données d'appel sont lues et écrites en CQL dans Cassandra, ce qui permet un routage décidé à l'exécution plutôt que codé en dur dans le dialplan.

Déroulé d'un appel :

```mermaid
sequenceDiagram
    participant A as Appelant
    participant AST as Asterisk
    participant AGI as Script Python AGI
    participant C as Cassandra
    A->>AST: appel entrant
    AST->>AGI: lancement du script
    AGI->>C: lecture CQL du dossier
    C-->>AGI: données client
    AGI->>AST: annonce et menu à jouer
    AST->>A: message vocal
    A->>AST: saisie DTMF
    AST->>AGI: touche transmise
    AGI->>C: écriture de la trace d'appel
    AGI->>AST: destination de routage
    AST->>A: mise en relation
```

`Python` · `Asterisk AGI` · `Cassandra` · `Redis`

---

### Infrastructure WebRTC chiffrée

![WebRTC](https://img.shields.io/badge/WebRTC-333333?style=flat-square&logo=webrtc&logoColor=white)
![Asterisk](https://img.shields.io/badge/Asterisk-F38020?style=flat-square&logo=asterisk&logoColor=white)
![Let's Encrypt](https://img.shields.io/badge/Let's_Encrypt-003A70?style=flat-square&logo=letsencrypt&logoColor=white)

Passerelle de communication temps réel permettant d'appeler depuis un simple navigateur, sans logiciel client. Signalisation en WebSocket sécurisé, flux média chiffrés en SRTP, certificats Let's Encrypt renouvelés automatiquement, le tout servi par Lighttpd sur FreeBSD.

```mermaid
flowchart LR
    NAV["Navigateur web<br/>sans logiciel client"] --> PF["Pare-feu PF"]
    PF -->|HTTPS| LIG["lighttpd<br/>page et certificat TLS"]
    PF -->|WSS signalisation| AST["Asterisk<br/>serveur d'appel"]
    PF -->|SRTP média chiffré| AST
    AST --> SIP["Postes SIP internes"]
    LE["Let's Encrypt"] -. renouvellement .-> LIG
```

`Asterisk` · `WebRTC` · `TLS/SRTP` · `Let's Encrypt` · `Lighttpd` · `FreeBSD`

---

### Sauvegarde automatisée à 3 niveaux

[![Repo](https://img.shields.io/badge/Code-Backup--tar--scp-181717?style=flat-square&logo=github)](https://github.com/KeNrOm97/Backup-tar-scp)
![Shell](https://img.shields.io/badge/Shell-121011?style=flat-square&logo=gnu-bash&logoColor=white)

Chaîne de sauvegarde sans dépendance : compression tar.gz, transfert SCP vers un hôte distant, rotation sur deux jours et déclenchement par cron. Pensée pour tourner seule sur un serveur en production et rester lisible par le prochain administrateur.

```mermaid
flowchart LR
    CRON["cron"] -. déclenche .-> TAR
    SRC["Données du serveur"] --> TAR["Compression tar.gz"]
    TAR --> SCP["Transfert SCP sur SSH"]
    SCP --> DIST["Hôte de sauvegarde distant"]
    DIST --> ROT["Rotation sur 2 jours"]
    ROT --> DEL["Purge des archives expirées"]
```

`Shell` · `tar/gzip` · `SCP/SSH` · `cron` · `FreeBSD`

---

### Applications web

Des projets menés en parallèle pour rester à l'aise côté développement et déploiement continu.

| Projet | Description | Stack |
|---|---|---|
| **MiruStream** | Media center web : catalogue, lecture et déploiement continu | Next.js · Supabase · Vercel |
| **MiruStream API** | Backend REST qui alimente MiruStream, livré en conteneur | FastAPI · Python · Docker |
| **MiruList** | Suivi de catalogue et de progression avec interface web | JavaScript · Vercel |
| **Loup_G** | Jeu multijoueur en ligne | TypeScript · Vercel |

---

## Comment je travaille

Je passe par un playbook Ansible ou un script même quand l'installation à la main irait plus vite sur le moment. Une machine montée de mémoire, on ne la refait jamais deux fois pareil, et ça se paie le jour où il faut la remonter dans l'urgence. La plateforme OpenWCC se réinstalle de bout en bout sans que j'aie à me souvenir de quoi que ce soit.

Le pare-feu et les certificats arrivent en même temps que le service, jamais après. Ouvrir large en se disant qu'on refermera plus tard, ça finit en règles oubliées six mois plus tard.

Je documente au fur et à mesure, parce qu'un service finit toujours par changer de mains. Procédures d'exploitation, fichiers de configuration commentés, de quoi permettre à un collègue de reprendre sans venir me chercher.

Et je surveille. Prometheus et Zabbix pour les métriques, et des sauvegardes que je restaure vraiment de temps en temps. Une sauvegarde qu'on n'a jamais restaurée, on ne sait pas encore si c'en est une.

---

## Stack technique

<div align="center">

![FreeBSD](https://img.shields.io/badge/FreeBSD-AB2B28?style=for-the-badge&logo=freebsd&logoColor=white)
![Linux](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)
![Asterisk](https://img.shields.io/badge/Asterisk-F38020?style=for-the-badge&logo=asterisk&logoColor=white)
![Ansible](https://img.shields.io/badge/Ansible-EE0000?style=for-the-badge&logo=ansible&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![VMware](https://img.shields.io/badge/VMware-607078?style=for-the-badge&logo=vmware&logoColor=white)
![Odoo](https://img.shields.io/badge/Odoo-714B67?style=for-the-badge&logo=odoo&logoColor=white)

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Shell](https://img.shields.io/badge/Shell-121011?style=for-the-badge&logo=gnu-bash&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)
![Prometheus](https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=prometheus&logoColor=white)
![Zabbix](https://img.shields.io/badge/Zabbix-D40000?style=for-the-badge&logo=zabbix&logoColor=white)
![Cisco](https://img.shields.io/badge/Cisco_CCNA-1BA0D7?style=for-the-badge&logo=cisco&logoColor=white)

</div>

<details>
<summary><b>Voir la stack détaillée</b></summary>

<br>

| Domaine | Technologies |
|---|---|
| **Systèmes** | FreeBSD 14 · Debian/Ubuntu · CentOS · Windows Server |
| **Virtualisation** | VMware · QEMU/KVM · VirtualBox · Docker · Docker Compose |
| **VoIP & temps réel** | Asterisk 18 · FreeSWITCH · WebRTC · SIP · SRTP |
| **Messagerie & annuaire** | Apache James · Openfire (XMPP) · OpenLDAP · AD |
| **Automatisation** | Ansible · Shell · Python 3 · Git · cron |
| **Bases de données** | PostgreSQL 15 · MySQL · MariaDB · Redis · Cassandra |
| **Web & applicatif** | Nginx · lighttpd · Tomcat 10 · OpenJDK 11 · Let's Encrypt |
| **Supervision** | Prometheus · Zabbix |
| **Réseau & sécurité** | Routage et commutation Cisco · VLAN · VPN · DNS · PF · iptables |
| **Cloud** | AWS · Azure · Vercel · Supabase |
| **Développement** | Python · Shell · JavaScript · TypeScript · Next.js · FastAPI |
| **ERP & métier** | Odoo (développement de modules) · Docker Compose · ORM Odoo · XML |

</details>

---

## Parcours

| Année | Diplôme ou certification | Établissement |
|---|---|---|
| 2023 – 2025 | **Mastère MPP** — Manager de Portefeuille de Projets, option Informatique | Keyce Academy |
| 2023 | **Licence professionnelle MRIT** — option Internet des Objets | Lycée Joseph Gaillard |
| — | **Certification CCNA** — réseaux Cisco | Cisco |
| 2022 | **BTS SN** — option Informatique et Réseaux | Lycée Joseph Gaillard |

---

## Me contacter

Je suis ouvert aux opportunités en **infrastructure, VoIP et DevOps**.
**Mobilité** : Martinique, Métropole et télétravail. Permis B, véhiculé.

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/kendy-jerome-4b147234b)
[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:kendyjerome20@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/KeNrOm97)

<br>

*« Une infrastructure solide est invisible. On ne la remarque que le jour où elle manque. »*

</div>
