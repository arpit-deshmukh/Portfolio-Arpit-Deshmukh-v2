import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import ArticleIcon from "@mui/icons-material/Article";

export default function Contact() {
  return (
    <section className="pt-28 pb-20 px-6 max-w-4xl mx-auto text-white">
      
      <h1 className="text-4xl font-bold mb-10">Contact</h1>

      <div className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-md">

        <p className="text-gray-300 leading-relaxed mb-10">
          Feel free to reach out for  project discussions,
          opportunities, or simply to connect. I'm always open to meaningful
          conversations and new ideas.
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">

          <div className="flex items-start gap-3">
            <EmailIcon className="text-blue-400 mt-1" />
            <div>
              <p className="text-gray-300 mt-1">arpitdeshmukh21@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <LinkedInIcon className="text-blue-400 mt-1" />
            <div>
             
              <a
                href="https://www.linkedin.com/in/arpit-deshmukh-08877227a/"
                className="text-blue-400 hover:underline mt-1 block"
                target="_blank"
              >
                 <h3 className="text-sm font-semibold text-gray-200 mt-1">LinkedIn</h3>
          
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <GitHubIcon className="text-blue-400 mt-1" />
            <div>
              <a
                href="https://github.com/arpit-deshmukh"
                className="text-blue-400 hover:underline mt-1 block"
                target="_blank"
              >
               
                 <h3 className="text-sm font-semibold text-gray-200">GitHub</h3>
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <ArticleIcon className="text-blue-400 mt-1" />
            <div>
              <h3 className="text-sm font-semibold text-gray-200 mt-1">Resume</h3>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
