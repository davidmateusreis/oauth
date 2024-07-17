<h1 align="center">
  OAuth 2.0 Login with Spring Security
</h1>

O projeto foi apresentando nesse [vídeo](https://youtube.com/watch?v=OTl2hyeEVv0) e demonstra a implementação de um sistema de autenticação e autorização completo utilizando OAuth2, Keycloak e Spring Security.
## Tecnologias
 
- [Spring Boot](https://spring.io/projects/spring-boot)
- [Spring WebFlux](https://docs.spring.io/spring-framework/reference/web/webflux.html)
- [Spring Security](https://spring.io/projects/spring-security)
- [Vite](https://vitejs.dev)
- [React](https://pt-br.react.dev)
- [Keycloak](https://www.keycloak.org/)

## Pré-requisitos

- Java 17+
- Maven
- Node.js and npm
- Docker

## Objetivos

- Implementar um sistema de autenticação e autorização robusto utilizando OAuth2 e Keycloak.
- Integrar o sistema de autenticação com uma aplicação Spring Boot.
- Proteger recursos da aplicação utilizando Spring Security.
- Seguir as melhores práticas de segurança para autenticação e autorização.

## Como executar

- Clonar repositório git
```
Use o comando docker run -d -p 8080:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:22.0.5 start-dev pra rodar o Keycloak
```
- Use o Spring Boot Dashboard para rodar os projetos secured-service e gateway

```
Use comando npm start ou npm run dev para rodar o projeto frontend-spa
```

- Acessar aplicação em `http://localhost:3000` usando as credenciais do Keycloak.

- Após o login, você poderá acessar os recursos protegidos da aplicação e visualizar as informações do usuário autenticado.

## Funcionalidades

- Autenticação de usuários através do Keycloak.
- Autorização de acesso a recursos da aplicação com base em roles e permissões.
- Proteção de endpoints da API com Spring Security.
- Recuperação de informações do usuário autenticado.

## Observações

- Este projeto é um exemplo demonstrativo e pode ser adaptado para atender às necessidades específicas de cada aplicação.
- É importante seguir as melhores práticas de segurança ao implementar um sistema similar em produção.