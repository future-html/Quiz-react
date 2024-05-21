import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./Privacy.css"; // Ensure Tailwind CSS is imported in your main CSS file

const markdown = `
# Privacy Policy for Reactjsquiz.com

At React JS Quiz, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by React JS Quiz and how we use it.

If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.

This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in React JS Quiz. This policy is not applicable to any information collected offline or via channels other than this website.

## Consent

By using our website, you hereby consent to our Privacy Policy and agree to its terms.

## Information we collect

The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.

If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.

## How we use your information
We use the information we collect in various ways, including to:
* Provide, operate, and maintain our website
* Improve, personalize, and expand our website
* Understand and analyze how you use our website
* Develop new products, services, features, and functionality
* Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes
* Send you emails
* Find and prevent fraud

## Log Files

React JS Quiz follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users movement on the website, and gathering demographic information.

## Google DoubleClick DART Cookie

Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – https://policies.google.com/technologies/ads

## Advertising Partners Privacy Policies

You may consult this list to find the Privacy Policy for each of the advertising partners of React JS Quiz.

Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on React JS Quiz, which are sent directly to users browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.

__Note:__ that React JS Quiz has no access to or control over these cookies that are used by third-party advertisers.

## Third Party Privacy Policies

React JS Quiz's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.

You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers respective websites.
`;

function Privacy() {
	return (
		<main className="flex flex-col items-center">
			<article className="lg:w-2/4 p-5">
				<ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
			</article>
		</main>
	);
}

export default Privacy;
