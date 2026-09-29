import React, { useState } from 'react';
import { 
  Instagram, 
  Heart, 
  MessageCircle, 
  Send, 
  Bookmark, 
  ExternalLink, 
  CheckCircle2,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { INSTAGRAM_POSTS, InstagramPost } from '../data/instagramData';
import { INSTAGRAM_URL } from '../data/reviewsData';
import { TopFranceLogo } from './TopFranceLogo';

export const InstagramFeedSection: React.FC = () => {
  // Interactive like state for playful engagement
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});

  const toggleLike = (e: React.MouseEvent, postId: string) => {
    e.preventDefault();
    e.stopPropagation();
    setLikedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  return (
    <section 
      id="instagram" 
      className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-200 relative overflow-hidden"
    >
      {/* Subtle ambient light */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-gradient-to-r from-rose-500/5 via-purple-500/5 to-amber-500/5 blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            {/* Instagram Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/10 via-rose-500/10 to-amber-500/10 border border-rose-200 dark:border-rose-900/40 text-rose-600 dark:text-rose-400 text-xs font-bold uppercase tracking-wider mb-2.5">
              <Instagram className="w-3.5 h-3.5" />
              <span>@topfrancegoiania no Instagram</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-heading">
              Bastidores & Procedimentos Técnicos
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
              Acompanhe o dia a dia da oficina em Goiânia: diagnósticos em tempo real, diálises de câmbio, manutenções preventivas e a precisão do nosso trabalho.
            </p>
          </div>

          {/* Action Header Button */}
          <div className="shrink-0 flex items-center gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 hover:from-purple-500 hover:via-pink-500 hover:to-rose-500 text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-pink-500/10 hover:shadow-pink-500/25 cursor-pointer"
            >
              <Instagram className="w-4 h-4" />
              <span>Seguir no Instagram</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>

        {/* 4 Latest Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTAGRAM_POSTS.map((post: InstagramPost) => {
            const isLiked = !!likedPosts[post.id];
            const currentLikes = post.likes + (isLiked ? 1 : 0);

            return (
              <article
                key={post.id}
                className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/90 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl dark:shadow-none hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Post Header (Simulating official Instagram post) */}
                  <div className="p-3.5 flex items-center justify-between border-b border-slate-100 dark:border-slate-900">
                    <div className="flex items-center gap-2.5">
                      {/* Avatar with IG gradient ring */}
                      <div className="p-[1.5px] rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600">
                        <div className="bg-white dark:bg-slate-950 p-0.5 rounded-full">
                          <TopFranceLogo className="w-7 h-7" />
                        </div>
                      </div>
                      
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1">
                          <span className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                            topfrancegoiania
                          </span>
                          <CheckCircle2 className="w-3 h-3 text-blue-500" />
                        </div>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400">
                          Goiânia, Goiás
                        </span>
                      </div>
                    </div>

                    <a 
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1"
                      title="Abrir no Instagram"
                    >
                      <Instagram className="w-4 h-4 text-slate-400 group-hover:text-pink-500 transition-colors" />
                    </a>
                  </div>

                  {/* Post Image Container (1:1 Aspect Ratio) */}
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative aspect-square overflow-hidden bg-slate-100 dark:bg-slate-900 cursor-pointer"
                  >
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Service Category Floating Badge */}
                    <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-md border border-white/10 shadow-xs">
                      {post.serviceCategory}
                    </div>

                    {/* Car Model Floating Badge */}
                    <div className="absolute bottom-3 left-3 bg-blue-600/90 backdrop-blur-md text-white text-[10px] font-semibold px-2 py-0.5 rounded shadow-xs">
                      {post.carModel}
                    </div>

                    {/* Hover view overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-xs backdrop-blur-[2px]">
                      <Instagram className="w-4 h-4" />
                      <span>Ver no Instagram</span>
                    </div>
                  </a>

                  {/* Post Interactive Actions (Like, Comment, Share) */}
                  <div className="p-3.5 pb-2">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={(e) => toggleLike(e, post.id)}
                          className={`cursor-pointer transition-transform active:scale-125 ${
                            isLiked ? 'text-rose-500' : 'text-slate-700 dark:text-slate-300 hover:text-rose-500'
                          }`}
                          aria-label="Curtir postagem"
                        >
                          <Heart className={`w-5 h-5 ${isLiked ? 'fill-rose-500' : ''}`} />
                        </button>

                        <a
                          href={INSTAGRAM_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-700 dark:text-slate-300 hover:text-blue-500 transition-colors"
                          aria-label="Comentar no Instagram"
                        >
                          <MessageCircle className="w-5 h-5" />
                        </a>

                        <a
                          href={INSTAGRAM_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-700 dark:text-slate-300 hover:text-blue-500 transition-colors"
                          aria-label="Compartilhar no Instagram"
                        >
                          <Send className="w-4 h-4" />
                        </a>
                      </div>

                      <Bookmark className="w-4 h-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200" />
                    </div>

                    {/* Likes Count */}
                    <div className="text-xs font-bold text-slate-900 dark:text-white mb-1.5">
                      {currentLikes} curtidas
                    </div>

                    {/* Caption Preview */}
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed line-clamp-3">
                      <span className="font-bold text-slate-900 dark:text-white mr-1">
                        topfrancegoiania
                      </span>
                      {post.caption}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mt-2 text-[11px] text-blue-600 dark:text-blue-400 font-medium">
                      {post.tags.slice(0, 3).map((tag, i) => (
                        <span key={i}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Post Footer Date & Link */}
                <div className="px-3.5 py-2.5 border-t border-slate-100 dark:border-slate-900/90 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                  <span className="uppercase tracking-wider font-medium text-[10px]">
                    {post.date}
                  </span>
                  
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-rose-600 dark:text-rose-400 hover:underline"
                  >
                    <span>Abrir post</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Footer Callout Banner */}
        <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-amber-500/10 border border-pink-200/60 dark:border-pink-900/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shrink-0 shadow-sm">
              <Instagram className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-heading">
                Quer ver mais serviços e stories em tempo real?
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Postamos diariamente diagnósticos, curiosidades técnicas e novidades no <strong>@topfrancegoiania</strong>.
              </p>
            </div>
          </div>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 font-bold text-xs rounded-xl flex items-center gap-2 transition-colors shrink-0 shadow-xs cursor-pointer"
          >
            <span>Seguir @topfrancegoiania</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
