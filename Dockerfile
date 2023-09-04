FROM openjdk:20

COPY my-api-0.1.jar /app.jar

EXPOSE 8080

CMD ["java", "-jar", "/app.jar"]