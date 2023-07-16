"use client";

import { useNotes } from "@crossbell/indexer";
import { CharacterAvatar } from "@crossbell/ui";
import { Text, Skeleton, Space } from "@mantine/core";
import { LoadMore } from "../load-more";

export function FeedSkeleton() {
  return (
    <div className="flex item-center mb-6 gap-4">
      {/* avatar */}
      <div className="relative">
        <Skeleton height={48} circle />
      </div>

      <Space w={5} />

      {/* right side */}
      <div>
        <div className="font-mono text-lg text-sky-600 font-bold mb-2">
          <Skeleton height="1em" radius="xl" width={400} />
        </div>
        {/* Best way is Markdown-Render */}
        <div className="whitespace-break-spaces font-serif">
          <Skeleton height="1em" radius="xl" width={400} />
        </div>
      </div>
    </div>
  );
}

export function Feed() {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage, isLoading } =
    useNotes();

  const hasNoResult = !isLoading && !data?.pages.some((p) => p.count > 0);

  console.log(data, hasNextPage, isFetchingNextPage, isLoading);

  return (
    <div className="mx-30">
      <div>
        {data?.pages
          .flatMap((p) => p.list)
          .map((item, index) => (
            <div key={index} className="flex item-center mb-6 gap-4">
              <CharacterAvatar size="48px" characterId={item.characterId} />
              <div>
                <div className="font-mono text-lg text-sky-600 font-bold mb-2">
                  {/* @ts-ignore */}
                  {item.metadata?.content?.authors?.[0] ||
                    ("anonymous" as string)}
                </div>
                {/* Best way is Markdown-Render */}
                <p className="whitespace-break-spaces font-serif">
                  {item.metadata?.content?.content}
                </p>
              </div>
            </div>
          ))}
      </div>

      {isLoading &&
        Array(10)
          .fill(0)
          .map((_, i) => <FeedSkeleton key={i} />)}

      {/* load more */}
      <LoadMore
        onLoadMore={() => fetchNextPage()}
        hasNextPage={Boolean(hasNextPage)}
        isLoading={isFetchingNextPage}
      >
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <FeedSkeleton key={i} />
          ))}
      </LoadMore>

      {hasNoResult && (
        <div className="flex flex-col items-center justify-center">
          <Text className="my-5" weight={500}>
            No content. Explore to follow some characters.
          </Text>
        </div>
      )}
    </div>
  );
}
