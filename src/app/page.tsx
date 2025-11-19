import { ExternalLink, LinkIcon, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="w-full bg-green-100 flex items-center justify-center gap-5 flex-col md:flex-row p-5">
        <Image
          src={"/seniorphotocropped.png"}
          alt="Photo of Adam"
          width={512}
          height={512}
          className={"w-auto h-64 rounded-xl"}
        />
        <div className="flex flex-col">
          <h2 className="font-sans text-6xl font-semibold">Adam Greenberg</h2>
          <h3 className="text-3xl font-sans font-thin">
            Full-stack hardware and software developer
          </h3>

          <Link
            href={"https://www.linkedin.com/in/adam-greenberg-vt/"}
            className="text-xl inline-flex items-center gap-1 mt-3"
          >
            Connect on LinkedIn {<ExternalLink className="inline" />}
          </Link>
          <Link
            href={"mailto:adam@admk.dev"}
            className="text-xl inline-flex items-center gap-1"
          >
            Email me {<Mail className="inline" />}
          </Link>
          <Link
            href={"/projects/selfhosted"}
            className="text-sm inline-flex items-center gap-1 mt-4"
          >
            This website is proudly self hosted!
            {<LinkIcon className="inline w-4 h-4" />}
          </Link>
        </div>
      </div>
      <div className="flex-col flex items-center w-full px-5">
        <h2 className="text-3xl mt-5">Projects</h2>
        <Project
          title={"Orpheus Pico"}
          image={"/orpheuspico.jpg"}
          body={"A cost-efficient RP2040-based general purpose microcontroller"}
          bullets={[
            "Solo project; designed for Hack Club",
            "Designed to be cost-efficient for mass manufacturing",
            "Over 2,000 produced",
          ]}
        />
        <Project
          title={"Mutiny"}
          image={"/mutiny.png"}
          body={"An all-in-one physical mailing software suite"}
        />
      </div>
    </>
  );
}

function Project({
  image,
  title,
  body,
  bullets,
}: {
  image: string;
  title: string;
  body: string;
  bullets?: string[];
}) {
  return (
    <div className="bg-blue-100 flex flex-col md:flex-row items-center p-2 rounded-md max-w-5xl w-full my-2">
      <Image
        alt={title}
        src={image}
        width={512}
        height={512}
        className={
          "aspect-square object-cover object-center rounded-xl size-72 inline"
        }
      />
      <div className="grow p-10">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="font-thin">{body}</p>
        {bullets && (
          <ul className="list-disc list-inside mt-3">
            {bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
