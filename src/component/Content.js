import React from 'react'
import headerCSS from './header.css'

function Content(props) {
    return (
        <div>
            <div className="content">
                <h1>Israel Morales Lopez</h1>
                <p><a href={"https://www.youracclaim.com/badges/c6a53296-3c2b-4d5b-88ab-e9e1048ad816"}>Oracle Java Certified Programmer.</a></p>

                <p>Hello, my name is Israel Morales. I am a full-stack developer with 15+ years of experience. I am software, sports and music enthusiast.</p>

                <p>During my professional career I have worked for great companies such as Mentor Software Solutions, IBM, TATA Consultancy Services,
                   USAA Bank, Bank of America, the state of Illinois (in Chicago) with Technosoft Corp and currently for the state of Colorado at
                   Colorado department of human services (CDHS) and the Governor's Office of Information Technology (GOIT) with Technosoft Corp as well.</p>

                <p>Most of my experience in these companies was on the backend of the applications, my main skills are Java, Spring Boot, REST Web Services
                   and pretty much anything that has anything to do with data processing and data transport, including batch/cron jobs</p>

                <p>I have experience as well on the front-end technologies with HTML, CSS, JavaScript, ReactJS, XML, JSON, MVC Web Applications, REST Web-Services clients.</p>

                <p>As I mentioned, I am a software enthusiast. During my free time one of my hobbies is to test new technologies that are available. Some of my projects that
                are available on my github account were done using ReactJS, GraphQL, Serverless Framework, Amplify, Apollo Server, Apollo Client and Prisma with PostgreSQL.
                Currently i am using Heroku to store my DB on the cloud due AWS is kind of expensive even when you are developing and using EC2 or Beanstalk VMs.
                </p>

                <p>Click here to go to my GitHub: <a href={'https://github.com/beta5553'}>https://github.com/beta5553</a></p>

                <a name='projects'><h1>Projects</h1></a>
                <p>Software engineer at Colorado Department of Human Services (CDHS) /Governor's Office of Information Technology (GOIT).</p>
                <p>My responsibilities are to maintain and support production and low level environments for some of the government applications such as Child Support, etc. I am in charge to deploy all new code into the UAT / SIT / POC / PROD environments, including the Web Applications, the SOA applications and inject DB scripts.</p>
                <p>Part of my responsibilities are to code changes for Liferay (State Portal) , all written in java and mainly focused in the security involving Active Directory, EDirectory, LDAP transactions, Bindings, etc.</p>
                <p>I have created also some java batch jobs to automate some of the most common tasks in my team, some of them to create database reports and send them via email, other batch jobs to complete mechanical tasks such as transfer software artifacts to avoid manual code deployments over windows / linux servers.</p>

                <p>Some of my current responsibilities:</p>

                <ul>
                    <li>1- Application monitoring (Linux Servers, Web Servers, Application Servers, Database Servers and java applications.)</li>
                    <li>2- Create java batch jobs / applications to automate recurrent manual tasks. (Task automation).</li>
                    <li>3- Code deployments. (Java, JEE, SOA and SQL artifacts).</li>
                    <li>4- Application Development. (Liferay, Java, JS, AJAX, DB, LDAP coding, release new features and maintain current ones).</li>
                    <li>5- Ticket tracking, attend and track tickets created by the state of Colorado.</li>
                    <li>6- Monitor State Systems.</li>
                    <li>7- Management of small projects.</li>
                    <li>8- Technical leader of development and code versioning.</li>
                    <li>9- Agile methodology used.</li>
                </ul>

                <p>Technologies used on this project: Java, Spring Boot, IntelliJ, Eclipse, SVN, GIT, Liferay, SSH, MySQL and LDAP.</p>


            </div>
        </div>
    )
}

export default Content
