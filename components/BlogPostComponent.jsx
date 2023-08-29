'use client';
import Image from 'next/image';

import { useEffect, useState } from 'react';
import Loading from './Loading';
import { formatDate } from '@/lib/dateTimeHelper';

const Blog = ({ slug }) => {
  const [blogContent, setBlogContent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getBlogContent = async () => {
    const res = await fetch('/api/icontent/get-content?slug=' + encodeURIComponent(slug), {
      method: 'GET',
    });

    const result = await res.json();
    setBlogContent(result);
    setIsLoading(false);
  };

  const renderTextAsHtml = (htmlContent) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
  };

  useEffect(() => {
    getBlogContent();
  }, [slug]);
  return (
    <>
      {isLoading && <Loading />}
      {blogContent.length > 0 &&
        blogContent.map((content, index) => (
          <div key={index}>
            <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8 !pt-10">
              <div className="mx-auto max-w-screen-md ">
                <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight lg:text-4xl lg:leading-snug">{content.blog_title}</h1>
                <div className="mt-3 flex justify-center space-x-3 text-gray-500 ">
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="flex items-center space-x-2 text-sm">
                        <time className="text-gray-500 ">{formatDate(content.date_created)}</time>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg">
              <Image
                priority
                sizes="100vw"
                className="object-cover"
                width={0}
                height={0}
                alt=""
                src={content.blog_image ? content.blog_image : '/default-no-image.png'}
                style={{
                  position: 'absolute',
                  height: '100%',
                  width: '100%',
                  inset: '0px',
                  color: 'transparent',
                }}
              />
            </div>
            <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
              <div className="mx-auto ">
                <div className="mx-auto my-3 renderHtml">{renderTextAsHtml(content.blog_content)}</div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Blog;
