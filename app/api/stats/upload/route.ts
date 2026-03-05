import { NextResponse } from 'next/server';

// 临时内存存储（上线前换成数据库）
let statsStore: any[] = [];

export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (!data.shopId || !data.type) {
      return NextResponse.json({ error: '缺少 shopId 或 type' }, { status: 400 });
    }

    const entry = {
      ...data,
      receivedAt: new Date().toISOString(),
    };

    statsStore.push(entry);

    return NextResponse.json({
      success: true,
      message: '数据已接收',
      type: data.type,
      total: statsStore.length,
    });
  } catch (error) {
    return NextResponse.json({ error: '无效 JSON' }, { status: 400 });
  }
}

// 可选：GET 查看已存数据（测试用，后面加鉴权）
export async function GET() {
  return NextResponse.json({
    message: '使用 POST 上传数据',
    storedCount: statsStore.length,
    // data: statsStore  // 上线时别暴露全部
  });
}
