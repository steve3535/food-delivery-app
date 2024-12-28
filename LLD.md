```mermaid
flowchart TB
    classDef done fill:#90EE90,stroke:#000
    classDef inProgress fill:#FFD700,stroke:#000
    classDef todo fill:#FF9999,stroke:#000

    subgraph Backend["Backend Components"]
        subgraph Models["Models Layer"]
            User["User Model"]:::done
            Restaurant["Restaurant Model"]:::done
            MenuItem["MenuItem Model"]:::done
            Order["Order Model"]:::done
        end

        subgraph Controllers["Controllers Layer"]
            BaseController["Base Controller"]:::done
            RestController["Restaurant Controller"]:::done
            UserController["User Controller"]:::todo
            OrderController["Order Controller"]:::todo
            MenuController["Menu Controller"]:::todo
        end

        subgraph Routes["Routes Layer"]
            RestRoutes["Restaurant Routes"]:::done
            UserRoutes["User Routes"]:::todo
            OrderRoutes["Order Routes"]:::todo
            MenuRoutes["Menu Routes"]:::todo
        end

        subgraph Middleware["Middleware Layer"]
            Auth["Authentication"]:::todo
            Validation["Request Validation"]:::todo
            Error["Error Handling"]:::todo
        end

        subgraph Services["Services Layer"]
            PaymentService["Payment Service"]:::todo
            NotificationService["Notification Service"]:::todo
            LocationService["Location Service"]:::todo
        end
    end

    Routes --> Controllers
    Controllers --> Models
    Controllers --> Services
    Routes --> Middleware

    subgraph Legend["Status Legend"]
        Done["Completed"]:::done
        InProgress["In Progress"]:::inProgress
        Todo["To Do"]:::todo
    end
