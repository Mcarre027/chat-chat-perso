import { Input } from '@/components/ui/custom/input';
import { ProviderSetting } from '@/types/settings';

export const VeniceProvider = ({ venice, setVenice }: { venice: ProviderSetting['Venice'] | null; setVenice: (value: ProviderSetting['Venice'] | null) => void }) => {
    return (
        <div className='space-y-2'>
            <div className='space-y-0.5'>
                <p className='px-1 text-sm'>Venice API Key</p>
                <Input
                    type='text'
                    placeholder='sk-xxxx'
                    value={venice?.apiKey}
                    onChange={(e) => {
                        setVenice({
                            apiKey: e.target.value,
                        });
                    }}
                />
            </div>
            <div className='space-y-0.5'>
                <p className='px-1 text-sm'>Venice Endpoint</p>
                <Input
                    type='text'
                    placeholder='https://api.venice.ai/api/v1'
                    value={venice?.endpoint}
                    onChange={(e) => {
                        setVenice({
                            endpoint: e.target.value,
                        });
                    }}
                />
            </div>
        </div>
    );
};
