
import React, { useState } from "react";
import {
  Search, ShoppingBag, Package, Truck, ShieldCheck,
  ArrowRight, Menu, User, ChevronRight, Link2,
  Globe2, Clock, Star, Zap, Box, Camera
} from "lucide-react";

const categories = [
  { name: "Sneakers", icon: "👟", count: "Explore shoes" },
  { name: "Streetwear", icon: "👕", count: "Fashion finds" },
  { name: "Bags", icon: "👜", count: "Everyday carry" },
  { name: "Accessories", icon: "⌚", count: "Small details" },
  { name: "Electronics", icon: "🎧", count: "Tech essentials" },
  { name: "Home & Living", icon: "🏠", count: "Lifestyle picks" },
];

const products = [
  { name: "Everyday Street Sneakers", price: "$28.50", tag: "Popular", emoji: "👟" },
  { name: "Minimalist Crossbody Bag", price: "$19.80", tag: "Trending", emoji: "👜" },
  { name: "Classic Graphic Hoodie", price: "$24.90", tag: "Hot Pick", emoji: "👕" },
  { name: "Wireless Audio Headphones", price: "$32.00", tag: "New", emoji: "🎧" },
];

const platforms = ["Taobao", "1688", "Weidian", "JD.com", "Pinduoduo", "Others"];

export default function App() {
  const [url, setUrl] = useState("");
  const [activeTab, setActiveTab] = useState("Link Order");
  const [menuOpen, setMenuOpen] = useState(false);
  const [notice, setNotice] = useState("");

  const submitLink = () => {
    if (!url.trim()) {
      setNotice("Please paste a product link first.");
      return;
    }
    try {
      const parsed = new URL(url.trim());
      if (!["http:", "https:"].includes(parsed.protocol)) throw new Error();
      setNotice("Link received! Product parsing will be connected soon.");
    } catch {
      setNotice("Please enter a valid product URL.");
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#171717]">
      {/* Announcement */}
      <div className="bg-[#171717] text-white text-center text-xs py-2 px-4">
        Welcome to SharkGoo — Discover more, buy smarter.
        <span className="ml-2 text-orange-400 cursor-pointer">
          Explore now →
        </span>
      </div>

      {/* Header */}
      <header className="border-b border-gray-100 sticky top-0 z-50 bg-white/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-5 h-[76px] flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center text-white font-black text-xl">
              S
            </div>
            <span className="text-2xl font-black tracking-tight">
              SHARK<span className="text-orange-500">GOO</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#" className="text-orange-500">Home</a>
            <a href="#categories" className="hover:text-orange-500">Categories</a>
            <a href="#how-it-works" className="hover:text-orange-500">How It Works</a>
            <a href="#shipping" className="hover:text-orange-500">Shipping</a>
            <a href="#community" className="hover:text-orange-500">Community</a>
          </nav>

          <div className="hidden md:flex items-center gap-5">
            <button className="text-sm font-medium flex items-center gap-2">
              <User size={18} /> Sign In
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-full text-sm font-bold">
              Get Started
            </button>
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Menu />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t p-5 flex flex-col gap-4 text-sm">
            <a href="#categories">Categories</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#shipping">Shipping</a>
            <a href="#community">Community</a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="bg-[#faf9f6] overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 rounded-full px-4 py-2 text-xs font-bold mb-7">
              <Zap size={14} /> YOUR GLOBAL SHOPPING PARTNER
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-[1.06] tracking-tight">
              China Finds.
              <br />
              <span className="text-orange-500">Global</span> Delivery.
            </h1>

            <p className="text-gray-500 text-lg mt-7 max-w-lg leading-relaxed">
              Discover products from China's biggest marketplaces.
              We buy, inspect, pack and deliver them right to your door.
            </p>

            {/* Link Search */}
            <div className="bg-white shadow-xl shadow-gray-200/60 rounded-2xl p-3 mt-9 max-w-xl">
              <div className="flex gap-2 mb-3 px-2">
                {["Link Order", "Search Products"].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-xs font-bold px-4 py-2 rounded-full ${
                      activeTab === tab
                        ? "bg-orange-500 text-white"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-3 px-3">
                <Link2 className="text-orange-500 shrink-0" size={21} />
                <input
                  value={url}
                  onChange={e => setUrl(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && submitLink()}
                  placeholder={
                    activeTab === "Link Order"
                      ? "Paste Taobao / 1688 / Weidian link..."
                      : "Search products..."
                  }
                  className="w-full py-4 outline-none text-sm min-w-0"
                />
                <button
                  onClick={submitLink}
                  className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-5 py-4 font-bold text-sm shrink-0"
                >
                  <span className="hidden sm:inline">Go</span>
                  <ArrowRight className="sm:hidden" size={18} />
                </button>
              </div>
              {notice && (
                <p className="text-xs text-orange-600 px-3 pt-2">{notice}</p>
              )}
            </div>

            <div className="mt-6 flex flex-wrap gap-2 items-center text-xs text-gray-400">
              <span>Supported platforms:</span>
              {platforms.map(p => (
                <span key={p} className="bg-white border px-3 py-1.5 rounded-full text-gray-600">
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Hero Artwork */}
          <div className="relative min-h-[390px] flex items-center justify-center">
            <div className="absolute w-[340px] h-[340px] bg-orange-100 rounded-full" />
            <div className="relative z-10 bg-white rounded-[35px] shadow-2xl p-8 w-[310px] rotate-[-5deg]">
              <div className="flex justify-between items-center mb-8">
                <span className="font-black text-xl">SHARKGOO</span>
                <ShoppingBag className="text-orange-500" />
              </div>
              <div className="bg-[#f7f5f0] rounded-3xl h-48 flex items-center justify-center text-8xl">
                👟
              </div>
              <div className="mt-5 flex justify-between items-center">
                <div>
                  <p className="font-bold">Your next favorite find.</p>
                  <p className="text-xs text-gray-400 mt-1">From China to your door</p>
                </div>
                <div className="bg-orange-500 text-white rounded-full p-3">
                  <ArrowRight />
                </div>
              </div>
            </div>
            <div className="absolute top-10 right-0 md:right-5 bg-white shadow-lg rounded-2xl p-4 z-20">
              <div className="flex gap-2 items-center">
                <ShieldCheck className="text-green-500" />
                <div>
                  <p className="text-xs font-bold">Quality Checked</p>
                  <p className="text-[10px] text-gray-400">Warehouse inspection</p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-8 left-0 bg-white shadow-lg rounded-2xl p-4 z-20">
              <div className="flex gap-2 items-center">
                <Truck className="text-orange-500" />
                <div>
                  <p className="text-xs font-bold">Worldwide Shipping</p>
                  <p className="text-[10px] text-gray-400">One parcel, many finds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-5 py-7 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            [Globe2, "Global Access", "Shop across marketplaces"],
            [ShieldCheck, "Quality Inspection", "Check before shipping"],
            [Package, "Smart Consolidation", "Combine multiple orders"],
            [Truck, "Global Delivery", "Ship to your doorstep"],
          ].map(([Icon, title, desc]) => (
            <div key={title} className="flex gap-3 items-center">
              <div className="bg-orange-50 text-orange-500 p-3 rounded-xl">
                <Icon size={22} />
              </div>
              <div>
                <p className="font-bold text-sm">{title}</p>
                <p className="text-xs text-gray-400 mt-1">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="max-w-7xl mx-auto px-5 py-20">
        <div className="flex justify-between items-end mb-10">
          <div>
            <p className="text-orange-500 font-bold text-xs tracking-widest mb-3">
              EXPLORE THE WORLD
            </p>
            <h2 className="text-3xl md:text-4xl font-black">
              Shop by Category
            </h2>
            <p className="text-gray-400 mt-3 text-sm">
              Find something you'll love.
            </p>
          </div>
          <a href="#" className="hidden md:flex text-sm font-bold items-center gap-2">
            View All <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map(item => (
            <button key={item.name} className="border border-gray-100 hover:border-orange-400 hover:bg-orange-50 rounded-2xl p-6 text-left transition">
              <div className="text-4xl mb-5">{item.icon}</div>
              <p className="font-bold text-sm">{item.name}</p>
              <p className="text-xs text-gray-400 mt-2">{item.count}</p>
            </button>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-[#faf9f6] py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex justify-between items-end mb-10">
            <div>
              <p className="text-orange-500 font-bold text-xs tracking-widest mb-3">
                HANDPICKED FOR YOU
              </p>
              <h2 className="text-3xl md:text-4xl font-black">Trending Finds</h2>
            </div>
            <a href="#" className="text-sm font-bold flex items-center gap-2">
              Explore All <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {products.map((item, i) => (
              <div key={item.name} className="bg-white rounded-2xl overflow-hidden group">
                <div className="aspect-square bg-[#f4f1eb] flex items-center justify-center text-7xl relative">
                  {item.emoji}
                  <span className="absolute top-3 left-3 text-[10px] bg-white px-3 py-1 rounded-full font-bold">
                    {item.tag}
                  </span>
                </div>
                <div className="p-4">
                  <p className="font-bold text-sm">{item.name}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-orange-500 font-black">{item.price}</span>
                    <button className="bg-black text-white p-2 rounded-full group-hover:bg-orange-500 transition">
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-5 py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-orange-500 text-xs font-bold tracking-widest mb-3">
            SIMPLE. SMART. SHARKGOO.
          </p>
          <h2 className="text-3xl md:text-5xl font-black">
            From China to Your Door
          </h2>
          <p className="text-gray-400 mt-4 text-sm">
            Four simple steps to a smarter shopping experience.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            [Search, "01", "Find Products", "Paste a product link or discover something new."],
            [ShoppingBag, "02", "We Buy", "We purchase your selected products."],
            [Camera, "03", "Quality Check", "Inspect your items and review warehouse photos."],
            [Truck, "04", "Ship Worldwide", "Consolidate your parcel and send it home."],
          ].map(([Icon, number, title, desc]) => (
            <div key={number} className="relative text-center">
              <div className="w-20 h-20 mx-auto bg-orange-50 rounded-3xl flex items-center justify-center text-orange-500">
                <Icon size={32} />
              </div>
              <p className="text-orange-500 font-black text-xs mt-6">{number}</p>
              <h3 className="font-black text-lg mt-2">{title}</h3>
              <p className="text-gray-400 text-sm mt-3 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Shipping */}
      <section id="shipping" className="bg-[#171717] text-white py-20">
        <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-orange-400 text-xs font-bold tracking-widest mb-4">
              YOUR PARCEL, YOUR WAY
            </p>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              More Finds.
              <br />
              One Smart Parcel.
            </h2>
            <p className="text-gray-400 mt-6 leading-relaxed">
              Buy from different sellers, store your purchases in one place,
              and consolidate everything into one international shipment.
            </p>
            <button className="mt-8 bg-orange-500 hover:bg-orange-600 px-7 py-4 rounded-full font-bold text-sm flex items-center gap-3">
              Learn About Shipping <ArrowRight size={18} />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              [Package, "Warehouse", "Centralized storage"],
              [Camera, "QC Photos", "Inspect your items"],
              [Box, "Consolidation", "Combine your orders"],
              [Truck, "Delivery", "Worldwide shipping"],
            ].map(([Icon, title, desc]) => (
              <div key={title} className="bg-white/5 border border-white/10 rounded-2xl p-7">
                <Icon className="text-orange-400 mb-6" size={28} />
                <h3 className="font-bold">{title}</h3>
                <p className="text-xs text-gray-400 mt-2">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section id="community" className="max-w-7xl mx-auto px-5 py-20">
        <div className="bg-orange-50 rounded-[32px] p-9 md:p-16 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <p className="text-orange-600 font-bold text-xs tracking-widest mb-4">
              JOIN THE SHARK COMMUNITY
            </p>
            <h2 className="text-3xl md:text-4xl font-black">
              Good Finds Are Better Together.
            </h2>
            <p className="text-gray-500 mt-4 text-sm">
              Discover new finds, share your hauls and connect with shoppers worldwide.
            </p>
          </div>
          <button className="bg-[#171717] text-white rounded-full px-8 py-4 font-bold flex items-center gap-3 shrink-0">
            Join Our Community <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#171717] text-white pt-14 pb-8">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-14">
            <div className="col-span-2">
              <div className="text-2xl font-black">
                SHARK<span className="text-orange-500">GOO</span>
              </div>
              <p className="text-gray-400 text-sm mt-5 max-w-xs leading-relaxed">
                Discover more. Buy smarter. Your bridge to global shopping.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-5">Explore</h4>
              <div className="flex flex-col gap-3 text-sm text-gray-400">
                <a href="#categories">Categories</a>
                <a href="#how-it-works">How It Works</a>
                <a href="#shipping">Shipping</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-5">Support</h4>
              <div className="flex flex-col gap-3 text-sm text-gray-400">
                <a href="#">Help Center</a>
                <a href="#">Contact Us</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">Privacy Policy</a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-7 flex flex-col md:flex-row justify-between gap-4 text-xs text-gray-500">
            <p>© 2026 SharkGoo. All rights reserved.</p>
            <p>Discover More. Buy Smarter.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
