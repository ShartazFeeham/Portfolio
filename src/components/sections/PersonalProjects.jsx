import ProjectCard from './ProjectCard';
import ProjectPhoto from './ProjectPhoto';
import SectionHeading from '../ui/SectionHeading';

export default function PersonalProjects() {
  return (
    <section id="personal-projects" className="flex flex-col gap-4">
      <SectionHeading anchor="#index">PERSONAL PROJECTS</SectionHeading>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <article className="lg:col-span-8">
          <ProjectCard
            title="Open Forum"
            period="Dec 2024 – Present · Solo"
            description="A microservice-based, event-driven distributed application that focuses on a large-scale user base using Spring and Java technologies. The primary focus is on creating a highly scalable system capable of handling a significant user load, ensuring high availability, resilience, and fault tolerance."
            technologies="Java, Spring boot, Spring cloud, Caching, PostgreSQL, CQRS, Event Streaming (Kafka), Centralized logging (ELK), Monitoring, Tracing, Dockerizing, OAuth 2.0 & more."
            links={[{ label: 'GitHub repository', url: 'https://github.com/ShartazFeeham/Open_forum (Under Development)' }]}
          />

          <div className="mt-6">
            <ProjectCard
              title="Healthcare Management System"
              period="Oct 2023 – Dec 2023 · Team: 4"
              description="This is a multi-aspect healthcare platform that offers both doctor and patient-oriented services and functionalities including appointment scheduling, doctor & patient profiles, progress & achievement tracking, community forums, file storing, real-time notifications, secured account management, internationalization for multi-language support, admin dashboard, help/search index & more."
              technologies="[Backend] Java (21) & Spring Boot, [Frontend] React, CSS, HTML, [Architecture] Microservices, [Database & ORM] PostgreSQL, Spring Data JPA, [Inter-Service Communication] Feign Client, Discovery Server & API Gateway [Security] Spring Security, JWT for user auth's"
              links={[{ label: 'GitHub repository', url: 'https://github.com/ShartazFeeham/Healthcare_management' }]}
            />
          </div>
        </article>

        <aside className="lg:col-span-4 lg:border-l-2 lg:border-[#2c2a25] lg:pl-6 lg:ml-2">
          <ProjectPhoto src="/images/team.jpg" alt="Software team at work, editorial-style project photograph" />
          <div className="mt-6">
            <ProjectPhoto src="/images/desk.jpg" alt="Software engineering workspace and desk, archival-style photograph" />
          </div>
          <div className="mt-3 font-headline text-[10px] uppercase tracking-widest font-bold opacity-70 text-center">
            Photographs from the engineering archives
          </div>
        </aside>
      </div>

      <div className="mt-6">
        <ProjectCard
          title="Alhashor (Text-tag search engine)"
          period="Mar 2022 – Dec 2022 · Solo"
          description="Developed a Hadith search engine capable of indexing and searching extensive Bengali text corpora which can search by tag, keyword, and paragraph. The search process is highly optimized for quick and efficient searches in very large texts containing millions of words. Searching utilizes the LCS algorithm for keyword matching. Results are displayed with searching time complexity of O(1)."
          technologies="[Programming language] Java & Javascript, [DSA] Hash, Heap, Trie, Tree, LCS"
          links={[
            { label: 'GitHub repository', url: 'https://github.com/ShartazFeeham/Alhashor_Search_Engine' },
            { label: 'Live demo', url: 'https://boikotha.netlify.app/', align: 'right' },
          ]}
        />
      </div>
    </section>
  );
}
