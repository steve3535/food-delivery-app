flowchart TB
    subgraph Client["Mobile App (React Native)"]
        UI["User Interface"]
        State["State Management"]
        Location["Location Services"]
    end

    subgraph Server["Backend (Node.js/Express)"]
        API["REST API Layer"]
        Auth["Authentication"]
        BL["Business Logic"]
        DB["Database Layer"]
    end

    subgraph ExternalServices["External Services"]
        Maps["Google Maps API"]
        Payment["Payment Gateway"]
        Push["Push Notifications"]
    end

    subgraph Database["Database Layer"]
        MongoDB[(MongoDB)]
        Redis[(Redis Cache)]
    end

    Client --> |HTTP/WebSocket| Server
    Server --> ExternalServices
    Server --> Database