import React from 'react'
import './CommunityNewsList.scss'
import { createMarkup } from '../../utils/createMarkup';
import { removeFuture } from '../../utils/limitData';
import { sortNewestToOldest } from '../../utils/sort';
import CommunityNewsPreview from '../CommunityNewsPreview/CommunityNewsPreview';
import { useLanguage } from '../../utils/LanguageContext';

function CommunityNewsList({data}) {
  const language = useLanguage()
      const latestNews = removeFuture(data)
      return (
        <section className="community-news-list">
          {latestNews.map((single, index) => {
            return (
              <CommunityNewsPreview
                key={index}
                title={single.title}
                content={createMarkup(single.content)}
                id={language === "bg" ? single.en_id : single.id}
              />
            );
          })}
        </section>
      );
}

export default CommunityNewsList