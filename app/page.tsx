import SearchButton from "@/components/search-button";
import { SubscribeBottom } from "@/components/subscribe-form";
import { categories } from "@/config/components";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div data-home>
      <div className="max-w-3xl max-sm:text-center">
        <h1 className="font-heading text-foreground mb-4 text-4xl/[1.1] font-bold tracking-tight md:text-5xl/[1.1]">
          Beautiful UI components built with Tailwind CSS and React.
        </h1>
        <p className="text-muted-foreground mb-8 text-lg">
          An open-source collection of copy-and-paste components for quickly build application UIs.
        </p>
        <SearchButton />
      </div>

      <div className="relative my-16">
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categories
            .sort((a, b) => {
              if (a.isNew && !b.isNew) return -1;
              if (!a.isNew && b.isNew) return 1;
              return 0;
            })
            .map((category) => (
              <CategoryCard
                key={category.slug}
                slug={category.slug}
                name={category.name}
                componentsCount={category.components.length}
                isNew={category.isNew}
              />
            ))}
        </div>
      </div>

      <SubscribeBottom />
    </div>
  );
}

type CategoryCardProps = {
  slug: string;
  name: string;
  componentsCount?: number;
  isNew?: boolean;
};

function CategoryCard({ slug, name, componentsCount, isNew = false }: CategoryCardProps) {
  const href = `/${slug}`;
  const imageBasePath = `/thumbs/${slug}`;
  const alt = `${name} components`;
  const isComingSoon = componentsCount === undefined;

  return (
    <div className="space-y-3 text-center">
      {isComingSoon ? (
        <div className="relative inline-flex overflow-hidden rounded-xl border sm:flex dark:border-zinc-700/80">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-5 right-5 z-10 text-zinc-400 dark:text-zinc-500"
            width="27"
            height="13"
            fill="currentColor"
          >
            <title>Coming Soon</title>
            <path d="M21.74 12.504c-.27 0-.461-.088-.573-.266-.112-.177-.168-.48-.168-.91 0-.345.042-.774.126-1.288.093-.513.205-1.078.336-1.694.13-.625.266-1.27.406-1.932-.57.775-1.2 1.396-1.89 1.862a5.728 5.728 0 0 1-2.268.896c-.196.458-.42.873-.672 1.246a3.67 3.67 0 0 1-.826.896c-.299.224-.612.336-.938.336-.402 0-.742-.163-1.022-.49-.27-.326-.406-.802-.406-1.428 0-.43.056-.812.168-1.148.112-.345.238-.592.378-.742a3.35 3.35 0 0 1-.196-1.19c0-.55.126-1.036.378-1.456.252-.43.588-.76 1.008-.994.42-.242.872-.364 1.358-.364.392 0 .742.182 1.05.546.308.364.462.887.462 1.568 0 .635-.112 1.34-.336 2.114a5.983 5.983 0 0 0 1.54-.896 10.364 10.364 0 0 0 1.512-1.442c.485-.56.924-1.18 1.316-1.862a.483.483 0 0 1 .434-.252c.168 0 .298.052.392.154a.503.503 0 0 1 .154.392c0 .047-.028.206-.084.476-.047.27-.112.616-.196 1.036-.075.42-.159.882-.252 1.386-.094.504-.187 1.013-.28 1.526-.084.514-.154.99-.21 1.428a57.095 57.095 0 0 1 1.554-2.772c.29-.476.564-.91.826-1.302.27-.392.508-.704.714-.938.214-.242.382-.364.504-.364.224 0 .42.075.588.224.168.15.252.304.252.462 0 .215-.024.542-.07.98-.047.43-.103.915-.168 1.456l-.196 1.624a106.6 106.6 0 0 0-.168 1.47c-.047.439-.07.766-.07.98 0 .14-.06.266-.182.378a.584.584 0 0 1-.406.168.391.391 0 0 1-.266-.098c-.066-.056-.117-.186-.154-.392-.038-.205-.056-.522-.056-.952 0-.42.014-.877.042-1.372a39.09 39.09 0 0 1 .112-1.498 27.3 27.3 0 0 1 .182-1.358c-.215.355-.462.78-.742 1.274-.27.495-.556 1.004-.854 1.526a56.588 56.588 0 0 1-.868 1.47c-.28.458-.532.826-.756 1.106-.224.28-.397.42-.518.42Z" />
          </svg>
          <ImageComponent imageBasePath={imageBasePath} alt={alt} />
        </div>
      ) : (
        <Link
          href={href}
          className="peer relative inline-flex overflow-hidden rounded-xl border sm:flex dark:border-zinc-700/80"
          tabIndex={-1}
        >
          {isNew && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-5 left-5 z-10 text-zinc-950 dark:text-zinc-200"
              width="29"
              height="13"
              fill="currentColor"
            >
              <title>New</title>
              <path d="M18.805 12.406c-.326 0-.597-.145-.811-.434-.206-.299-.308-.826-.308-1.582 0-.793.014-1.563.041-2.31.029-.756.08-1.433.154-2.03.084-.597.197-1.073.337-1.428s.322-.532.546-.532c.158 0 .298.089.42.266.12.168.181.392.181.672 0 .29-.027.677-.083 1.162a46.698 46.698 0 0 1-.21 1.568c-.075.55-.14 1.087-.197 1.61-.055.513-.084.947-.084 1.302 0 .15.005.27.014.364.02.084.047.126.085.126.14 0 .289-.121.447-.364a7.49 7.49 0 0 0 .532-.98c.187-.41.383-.859.588-1.344.206-.495.416-.985.63-1.47.215-.485.434-.929.659-1.33.224-.41.448-.737.672-.98.224-.252.443-.378.658-.378.252 0 .485.121.7.364.224.233.335.57.335 1.008 0 .13-.018.36-.056.686a60.22 60.22 0 0 1-.14 1.092l-.168 1.232c-.055.401-.102.76-.14 1.078a6.3 6.3 0 0 0-.055.658c0 .485.046.728.14.728.26 0 .536-.164.825-.49a7.67 7.67 0 0 0 .896-1.288c.308-.532.612-1.106.91-1.722l.883-1.792c.13-.299.238-.5.322-.602.093-.112.186-.168.28-.168.13 0 .252.07.364.21.12.14.181.331.181.574 0 .084-.004.168-.014.252-.009.075-.032.159-.07.252-.317.84-.657 1.62-1.021 2.338-.364.71-.738 1.33-1.12 1.862-.374.522-.742.933-1.107 1.232-.364.29-.7.434-1.008.434-.532 0-.947-.15-1.246-.448-.289-.308-.433-.719-.433-1.232 0-.215.014-.495.041-.84.038-.345.08-.719.127-1.12.056-.401.111-.789.168-1.162.055-.373.102-.7.14-.98.046-.28.074-.471.084-.574.009-.13-.005-.196-.042-.196-.038 0-.113.121-.224.364-.103.233-.23.532-.378.896-.14.355-.29.723-.448 1.106-.178.42-.383.882-.616 1.386-.224.495-.467.966-.729 1.414a5.366 5.366 0 0 1-.797 1.106c-.28.29-.565.434-.855.434Z" />
              <path d="M16.554 5.966c0 .299-.094.593-.28.882-.187.28-.434.55-.742.812-.308.252-.649.49-1.022.714-.374.224-.747.42-1.12.588-.374.168-.714.303-1.022.406a4.88 4.88 0 0 0-.112.966c0 .177.042.303.126.378.084.075.214.112.392.112.392 0 .807-.07 1.246-.21.438-.14.886-.322 1.344-.546.457-.224.896-.462 1.316-.714.42-.252.802-.49 1.148-.714.354-.224.648-.406.882-.546.233-.14.387-.21.462-.21.112 0 .196.037.252.112a.324.324 0 0 1 .098.238c0 .075-.117.22-.35.434-.224.215-.528.467-.91.756-.383.28-.812.57-1.288.868-.476.299-.97.579-1.484.84-.504.261-.994.471-1.47.63-.467.159-.887.238-1.26.238-.486 0-.864-.182-1.134-.546-.27-.364-.406-.929-.406-1.694 0-.513.065-1.031.196-1.554.14-.523.326-1.022.56-1.498a7.77 7.77 0 0 1 .798-1.288c.298-.383.611-.681.938-.896.326-.224.644-.336.952-.336.588 0 1.05.163 1.386.49.336.327.504.756.504 1.288ZM12.662 8.29c.29-.177.588-.364.896-.56.308-.196.592-.397.854-.602.261-.205.471-.42.63-.644a1.21 1.21 0 0 0 .252-.714c0-.345-.187-.518-.56-.518-.234 0-.48.15-.742.448-.252.29-.495.667-.728 1.134-.234.467-.434.952-.602 1.456ZM7.326 12.84a.664.664 0 0 1-.518-.238c-.13-.159-.196-.42-.196-.784 0-.121.014-.252.042-.392.028-.15.08-.299.154-.448a35.616 35.616 0 0 1-1.176-3.374 36.19 36.19 0 0 1-.812-3.43 32.977 32.977 0 0 0-.854 1.918A88.035 88.035 0 0 0 2.594 9.76c-.187.541-.35 1.008-.49 1.4-.15.467-.299.78-.448.938-.15.168-.304.252-.462.252-.215 0-.378-.051-.49-.154C.6 12.093.55 11.911.55 11.65c0-.196.051-.5.154-.91.102-.41.242-.887.42-1.428.186-.541.396-1.11.63-1.708.233-.597.48-1.18.742-1.75.27-.57.541-1.083.812-1.54.27-.467.527-.835.77-1.106.252-.28.48-.42.686-.42.214 0 .396.042.546.126.158.084.331.303.518.658.121.243.261.597.42 1.064.158.457.317.975.476 1.554.158.57.312 1.157.462 1.764.15.597.28 1.153.392 1.666l.98-4.536c.28-1.307.494-2.329.644-3.066.158-.737.242-1.125.252-1.162.056-.243.116-.392.182-.448a.418.418 0 0 1 .28-.084c.168 0 .331.07.49.21.168.13.252.313.252.546 0 .112-.028.369-.084.77-.047.401-.121.905-.224 1.512a45.805 45.805 0 0 1-.364 2.002 58.78 58.78 0 0 1-.518 2.282 41.448 41.448 0 0 1-.658 2.338c-.234.765-.49 1.489-.77 2.17-.103.261-.224.439-.364.532-.13.103-.248.154-.35.154Z" />
            </svg>
          )}
          <ImageComponent imageBasePath={imageBasePath} alt={alt} />
        </Link>
      )}
      <div className="[&_a]:peer-hover:underline">
        <h2>
          {!isComingSoon ? (
            <Link href={href} className="text-sm font-medium hover:underline">
              {name}
            </Link>
          ) : (
            <span className="text-sm font-medium">{name}</span>
          )}
        </h2>
        <p className="text-muted-foreground text-[13px]">
          {!isComingSoon
            ? `${componentsCount} ${componentsCount === 1 ? "Component" : "Components"}`
            : "-"}
        </p>
      </div>
    </div>
  );
}

type ImageComponentProps = {
  imageBasePath: string;
  alt: string;
};

function ImageComponent({ imageBasePath, alt }: ImageComponentProps) {
  return (
    <>
      <Image
        className="w-full dark:hidden"
        src={`${imageBasePath}.png`}
        alt={alt}
        width={268}
        height={198}
      />
      <Image
        className="hidden w-full dark:block"
        src={`${imageBasePath}-dark.png`}
        alt={`${alt} dark`}
        width={268}
        height={198}
      />
    </>
  );
}
