import Link from "next/link";
import { ArticleData } from "../../lib/types";
import { previewMd } from "../../lib/utils";

interface Props {
    article: ArticleData;
}

const ArticleCard: React.FC<Props> = (props: Props) => {
    const { article } = props;
    return (
        <div className="shadow-lg rounded p-3">
            <Link href={`/article/${article.slug}`}>
                <h1 className="text-2xl cursor-pointer font-bold text-white-300">
                    {article.title}
                </h1>
            </Link>
            <h2 className="pt-3 text-white-300">{article.date.toString()}</h2>
            <p className="pt-4 text-white-300 text-sm">
                {previewMd(article.desc)}
            </p>
        </div>
    );
};

export default ArticleCard;
