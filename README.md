# Bank kata

> This kata is original from [sandromancuso/Bank-kata](https://github.com/sandromancuso/Bank-kata)
> 
> Which is based in [How Object-Oriented Are You Feeling Today? - Krzysztof Jelski](https://www.slideshare.net/KrzysztofJelski/how-object-oriented-are-you-feeling-today) (Session on the Software Craftsmanship UK 2011 conference)
> 
> Based also in the video [Outside In TDD](https://www.youtube.com/watch?v=XHnuMjah6ps)

## Requirements

Create a simple bank application with the following features

* Deposit into Account
* Withdraw from an Account
* Print a bank statement to the console

### Acceptance criteria

Given a client makes a deposit of 1000 on 20/01/2022

And a deposit of 2000 on 23/01/2022

And a withdrawal of 500 on 24/01/2022

When she prints her bank statement  

Then she would see at the terminal

```
DATE | AMOUNT | BALANCE
24/01/2012 | 500.00 | 2500.00
23/01/2012 | 2000.00 | 3000.00
20/01/2012 | 1000.00 | 1000.00
```

## Starting points and constraints

1. Start with a class using the following structure

    ```java
    public class Account {
        public void deposit(int amount);
        public void withdraw(int amount);
        public void printStatement();
    }
    ```

2. You are **not allowed** to add any other public method to this class.
3. Use Strings and Integers for dates and amounts (keep it simple)
4. Don't worry about spacing in the statement printed on the console

# Base para hacer tests

Configuración básica para empezar a hacer una kata o aprender a hacer tests en los siguientes lenguajes:

- PHP y PHPUnit
- Javascript con Jest
- Typescript con Deno
- Java, Junit y Mockito
- Scala, Munit y Scalacheck
- Kotlin, JUnit5 y MockK
- C#, xUnit (con FluentAsertion) y NSubstitute (para mock)

# Configuración específica por lenguaje

## PHP con PHPUnit

1. Instalar [composer](https://getcomposer.org/) `curl -sS https://getcomposer.org/installer | php`
2. `composer install` (estando en la carpeta php)
3. `./vendor/bin/phpunit`

### 📚 Documentación
- [PHPUnit](https://phpunit.readthedocs.io/)
- [Prophecy](https://github.com/phpspec/prophecy) para dobles de prueba

## Javascript con Jest

1. Instalar [Node](http://nodejs.org/)
2. `npm install` (Estando en la carpeta javascript)
3. `npm test`

### 📚 Documentación
- [Jest](https://jestjs.io)

## Typescript con Deno

1. Instalar [Deno](https://deno.land/#installation)
2. `deno test` (Estando en la carpeta typescript)

### 📚 Documentación
- [Deno](https://deno.land/manual)
- [BDD module](https://deno.land/manual/testing/behavior_driven_development)
- [Expect module](https://deno.land/x/expect)

## Java con Junit y Mockito

1. Instalar las dependencias y tests con Maven [mvn test]
2. Ejecutar los tests con el IDE

### 📚 Documentación
- [JUnit](https://github.com/junit-team/junit/wiki)
- [Mockito](http://site.mockito.org/mockito/docs/current/org/mockito/Mockito.html)

## Scala con Munit y Scalacheck

1. `sbt` (en la carpeta scala)
2. `~test` para ejecutar los test en hot reload

### 📚 Documentación
- [Munit](https://scalameta.org/munit/docs/tests.html)
- [Scalacheck](https://github.com/typelevel/scalacheck/blob/main/doc/UserGuide.md) para testing basado en propiedades

### Linux/Mac
1. Instalar [SDKMan](https://sdkman.io/)
2. `sdk install java 11.0.12-open` instala OpenJDK
3. `sdk install sbt` una vez instalado SDKMan

### Windows
1. Instalar [OpenJDK](https://docs.microsoft.com/es-es/java/openjdk/download#openjdk-110141-lts--see-previous-releases)
2. Instalar [SBT](https://www.scala-sbt.org/download.html)

### Visual Studio Code
1. Descargar [Visual Studio Code](https://code.visualstudio.com/)
2. Instalar para VS Code [Metals](https://scalameta.org/metals/docs/editors/vscode)

## Kotlin con JUnit5 y MockK

1. Por consola: Puedes instalar dependencias y lanzar los tests con `gradlew test`
2. Usando IDE: Simplemente abre el proyecto desde el raiz de la plantilla Kotlin

### 📚 Documentación
- [JUnit5](https://junit.org/junit5/)
- [MockK](https://mockk.io/)

## C# con  xUnit (con FluentAsertion) y NSubstitute (para mock)

1. Instalar Microsoft Visual Studio Community 2022
2. Abre el proyecto y se descargaran automáticamente los paquetes Nuguet necesarios
3.
### 📚 Documentación
- [xUnit](https://xunit.net/)
- [NSubstitute](https://nsubstitute.github.io/help.html)
- [FluentAssertions](https://fluentassertions.com/introduction)

## Python
1. Instalar python 3.x
2. Una vez descargado el código fuente dentro de la carpeta */python/ creamos un virtual enviroment:
3. `python3 -m venv env`
4. Activamos en virtual environment:
- windows: `.\env\Scripts\activate.bat`
- linux/mac: `source env/bin/activate`
5. `pytest` para ejecutar los tests.
