import React from "react";
import { assets } from "../../../assets/assets";
import {
	IconBrandInstagram,
	IconBrandTwitter,
	IconBrandLinkedin,
	IconBrandFacebook,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Footer = () => {
	const goToHomeTop = () => {
		navigate("/homePage");
		setTimeout(() => {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}, 50);
	};
	return (
		<footer className="w-full bg-gray-900 text-gray-300 mt-16 pt-10 border-t border-gray-700">
			<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
				{/* Brand Section */}
				<div>
					<Link
						to={"/homePage"}
						onClick={goToHomeTop}
						className="text-2xl font-bold text-white flex items-center cursor-pointer">
						<span className="text-orange-400">Hire</span>Sphere
					</Link>

					<p className="text-gray-400 mt-3">
						Your gateway to finding the perfect job. Browse thousands of
						opportunities with just a click.
					</p>

					{/* Social Icons */}
					<div className="flex gap-4 mt-4">
						<IconBrandInstagram className="w-6 h-6 cursor-pointer hover:text-orange-400 transition" />
						<IconBrandTwitter className="w-6 h-6 cursor-pointer hover:text-orange-400 transition" />
						<IconBrandLinkedin className="w-6 h-6 cursor-pointer hover:text-orange-400 transition" />
						<IconBrandFacebook className="w-6 h-6 cursor-pointer hover:text-orange-400 transition" />
					</div>
				</div>

				{/* Quick Links */}
				<div>
					<h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
					<ul className="space-y-2">
						<li className="hover:text-orange-400 cursor-pointer transition">
							Find Jobs
						</li>
						<li className="hover:text-orange-400 cursor-pointer transition">
							Post a Job
						</li>
						<li className="hover:text-orange-400 cursor-pointer transition">
							Career Tips
						</li>
						<li className="hover:text-orange-400 cursor-pointer transition">
							About Us
						</li>
					</ul>
				</div>

				{/* Support */}
				<div>
					<h3 className="text-lg font-semibold text-white mb-3">Support</h3>
					<ul className="space-y-2">
						<li className="hover:text-orange-400 cursor-pointer transition">
							FAQs
						</li>
						<li className="hover:text-orange-400 cursor-pointer transition">
							Help Center
						</li>
						<li className="hover:text-orange-400 cursor-pointer transition">
							Privacy Policy
						</li>
						<li className="hover:text-orange-400 cursor-pointer transition">
							Terms & Conditions
						</li>
					</ul>
				</div>

				{/* Contact Info */}
				<div>
					<h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
					<ul className="space-y-2">
						<li>Email: support@hireSphere.com</li>
						<li>Phone: +91 9090909090</li>
						<li>Location: Kolkata, India</li>
					</ul>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="text-center text-gray-500 py-4 border-t border-gray-700 mt-10 text-sm">
				© 2025-{new Date().getFullYear()}{" "}
				<span className="text-orange-400 font-semibold">HireSphere</span>. All
				Rights Reserved.
			</div>
		</footer>
	);
};

export default Footer;
