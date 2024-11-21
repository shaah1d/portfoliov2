import { designs } from "#site/content";
import { MDXContentRenderer } from "@/components/mdx/mdx-content-renderer";
import Image from "next/image";


export default function Designs() {

  return (
    <div className="mt-10 ">
          <div className="pb-12 ">
              {/* <MDXContentRenderer code={designs[0].body} /> */}
              
              <Image alt="design" width={1000} height={1000} src="/designs/img1.png" loading="lazy" className="rounded-2xl my-2 border" />
              <Image alt="design" width={1000} height={1000} src="/designs/img7.png" loading="lazy" className="rounded-2xl my-2 border" />
              <Image alt="design" width={1000} height={1000} src="/designs/img2.png" loading="lazy" className="rounded-2xl my-2 border" />
              <Image alt="design" width={1000} height={1000} src="/designs/img0.png" loading="lazy" className="rounded-2xl my-2 border" />
              <Image alt="design" width={1000} height={1000} src="/designs/img3.png" loading="lazy" className="rounded-2xl my-2 border" />
              <Image alt="design" width={1000} height={1000} src="/designs/img4.png" loading="lazy" className="rounded-2xl my-2 border" />
              <Image alt="design" width={1000} height={1000} src="/designs/img5.png" loading="lazy" className="rounded-2xl my-2 border" />
              <Image alt="design" width={1000} height={1000} src="/designs/img6.png" loading="lazy" className="rounded-2xl my-2 border" />
              <Image alt="design" width={1000} height={1000} src="/designs/img8.png" loading="lazy" className="rounded-2xl my-2 border" />
              <Image alt="design" width={1000} height={1000} src="/designs/img9.png" loading="lazy" className="rounded-2xl my-2 border" />
              <Image alt="design" width={1000} height={1000} src="/designs/img10.png" loading="lazy" className="rounded-2xl my-2 border" />
        </div>
    </div>
  );
}
